from backend.admin import admin_site
from django.contrib import admin
from products.models import Categories,Products, Sizes
from .forms import ProductAdminForm,CategoryAdminForm,SizeAdminForm

class ProductAdmin(admin.ModelAdmin):
    form = ProductAdminForm

class CategoryAdmin(admin.ModelAdmin):
    form = CategoryAdminForm

class SizeAdmin(admin.ModelAdmin):
    form = SizeAdminForm
admin_site.register(Products,ProductAdmin)
admin_site.register(Categories,CategoryAdmin)
admin_site.register(Sizes,SizeAdmin)
