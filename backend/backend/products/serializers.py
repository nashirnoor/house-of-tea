from rest_framework import serializers
from products.models import Products,Categories, Sizes

class SizeSerializer(serializers.ModelSerializer):
    # size=serializers.CharField()
    # price=serializers.FloatField()
    class Meta:
        model=Sizes
        fields = "__all__"

class ProductSerilizer(serializers.ModelSerializer):
    sizes=SizeSerializer(many=True, read_only=True)
    class Meta:
        model=Products
        fields = "__all__"

class CatogerySerializer(serializers.ModelSerializer):
    name=serializers.CharField()
    products=ProductSerilizer(many=True, read_only=True)
    class Meta:
        model=Categories
        fields = "__all__"