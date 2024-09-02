from backend.admin import admin_site
from django.contrib import admin
from products.models import Categories,Products, Sizes
from .forms import ProductAdminForm

class ProductAdmin(admin.ModelAdmin):
    form = ProductAdminForm


admin_site.register(Products,ProductAdmin)
admin_site.register(Categories)
admin_site.register(Sizes)
