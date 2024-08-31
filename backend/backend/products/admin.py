from backend.admin import admin_site

from products.models import Categories,Products, Sizes



admin_site.register(Products)
admin_site.register(Categories)
admin_site.register(Sizes)
