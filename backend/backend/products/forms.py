from typing import Any
from django import forms
from .models import Products,Categories, Sizes
from googletrans import Translator

from django.utils.safestring import mark_safe
from django.urls import reverse
translator=Translator()

class CategoryAdminForm(forms.ModelForm):
    class Meta:
        model=Categories
        fields ='__all__'
    def clean(self) -> dict[str, Any]:
        cleaned_data = super().clean()
        if not cleaned_data.get('name_ar','') and cleaned_data.get('name',''):
            cleaned_data['name_ar']=translator.translate(cleaned_data.get('name'),src='english',dest='arabic').text
        return cleaned_data

class SizeAdminForm(forms.ModelForm):
    class Meta:
        model=Sizes
        fields='__all__'
    def clean(self) -> dict[str, Any]:
        cleaned_data=super().clean()
        if not cleaned_data.get('size_ar','') and cleaned_data.get('size',''):
            cleaned_data['size_ar']= translator.translate(cleaned_data.get('size'),src='english',dest='arabic').text
        return cleaned_data

class SizeWidget(forms.CheckboxSelectMultiple):
    def render(self, name, value, attrs=None, renderer=None):
        # Call the original render method
        original_render = super().render(name, value, attrs, renderer)

        # Create the link to add a new category
        add_link = reverse('admin:products_sizes_add') +"?_to_field=id&_popup=1" # Replace 'app' with your app name
        add_button = mark_safe(f'''
            <p>
                <a href="{add_link}" class="btn btn-outline-secondary" onclick="return showAddAnotherPopup(this);">
                    Add Category
                </a>
            </p>
        ''')

        return original_render + add_button

class ProductAdminForm(forms.ModelForm):
    # sizes=forms.ModelMultipleChoiceField(
    #         queryset=Sizes.objects.all(),
    #         widget=SizeWidget(),
    #         required=False)
    class Meta:
        model = Products
        fields = '__all__'  

    def clean(self):
        cleaned_data = super().clean()
        price = cleaned_data.get('price')
        sizes = cleaned_data.get('sizes')
        if price==None and not sizes.exists():
            self.add_error('price','')
            self.add_error('sizes','')
            raise forms.ValidationError('price or size options are required')
        if not cleaned_data.get('name_ar','') and cleaned_data.get('name',''):
            cleaned_data['name_ar']=translator.translate(cleaned_data.get('name'),src='english',dest='arabic').text
        if not cleaned_data.get('description_ar','') and cleaned_data.get('description',''):
            cleaned_data['description_ar']=translator.translate(cleaned_data.get('description'),src='english',dest='arabic').text


        return cleaned_data