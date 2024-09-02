from django import forms
from .models import Products

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
        

        return cleaned_data