from typing import Any
from django import forms
from .models import Products,Categories, Sizes
from googletrans import Translator

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


class ProductAdminForm(forms.ModelForm):
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