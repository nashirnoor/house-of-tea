from rest_framework import serializers
from products.models import Products,Categories, Sizes
from translate import Translator

from django.utils.translation import gettext
from googletrans import Translator
translator=Translator()


class SizeSerializer(serializers.ModelSerializer):
    #size=serializers.CharField()
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
    
    #name=translate.translate(serializers.Field(source='name'))
    products=ProductSerilizer(many=True, read_only=True)
    
    class Meta:
        model=Categories
        fields = "__all__"

# arabic
        
class SizeSerializerAR(serializers.ModelSerializer):
    size=serializers.SerializerMethodField()
    # price=serializers.FloatField()
    def get_size(self,obj):
        return translator.translate(obj.size,src='english',dest='arabic').text
    class Meta:
        model=Sizes
        fields = "__all__"


class ProductSerilizerAR(serializers.ModelSerializer):
    sizes=SizeSerializerAR(many=True, read_only=True)
    name=serializers.SerializerMethodField()
    description=serializers.SerializerMethodField()

    def get_name(self, obj):
        return translator.translate(obj.name,src='english',dest='arabic').text
    
    def get_description(self, obj):
        if obj.description:
            translator.translate(obj.description,src='english',dest='arabic').text
        return obj.description

    class Meta:
        model=Products
        fields = "__all__"


class CatogerySerializerAR(serializers.ModelSerializer):
    name=serializers.SerializerMethodField()
    
    #name=translate.translate(serializers.Field(source='name'))
    products=ProductSerilizerAR(many=True, read_only=True)
    def get_name(self, obj):
        return translator.translate(obj.name,src='english',dest='arabic').text
    class Meta:
        model=Categories
        fields = "__all__"