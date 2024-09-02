from django.db import models
from django.db.models import Q
from translate import Translator
translate=Translator(to_lang='arabic')
class Categories(models.Model):
    name=models.CharField(max_length=50,unique=True)
    name_ar=models.CharField(max_length=50,null=True,blank=True,verbose_name='name in arabic')
    def __str__(self) -> str:
        return self.name
    class Meta:
        verbose_name_plural = "Categories"   
   
class Sizes(models.Model):
    size=models.CharField(max_length=20)
    size_ar=models.CharField(max_length=50,null=True,blank=True,verbose_name='size in arabic')
    price=models.FloatField()
    def __str__(self) -> str:
        return "size:"+self.size +','+ 'price:'+str(self.price)
    class Meta:
        verbose_name_plural = "sizes"


class Products(models.Model):
    category=models.ForeignKey(Categories,on_delete=models.CASCADE,related_name='products')
    image=models.ImageField(upload_to='product_images')
    name=models.CharField(max_length=50,unique=True)
    name_ar=models.CharField(max_length=50,null=True,blank=True,verbose_name='name in arabic')
    description=models.TextField(null=True,blank=True)
    description_ar=models.TextField(blank=True,null=True,verbose_name='description in arabic')
    price=models.FloatField(null=True,blank=True)
    sizes=models.ManyToManyField(to=Sizes,null=True,blank=True,related_name='products')
    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "Products"






