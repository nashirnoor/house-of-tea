from django.db import models
from django.db.models import Q
from translate import Translator
translate=Translator(to_lang='arabic')
class Categories(models.Model):
    name=models.CharField(max_length=50)
    def __str__(self) -> str:
        return self.name
    class Meta:
        verbose_name_plural = "Categories"   
   
class Sizes(models.Model):
    size=models.CharField(max_length=20)
    price=models.FloatField()
    def __str__(self) -> str:
        return "size:"+self.size +','+ 'price:'+str(self.price)
    class Meta:
        verbose_name_plural = "sizes"


class Products(models.Model):
    category=models.ForeignKey(Categories,on_delete=models.CASCADE,related_name='products')
    image=models.ImageField(upload_to='product_images')
    name=models.CharField(max_length=50)
    description=models.TextField(null=True,blank=True)
    price=models.FloatField(null=True,blank=True)
    sizes=models.ManyToManyField(to=Sizes,null=True,blank=True,related_name='products')
    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "Products"

    #     constraints = [
    #         models.CheckConstraint(check=Q(price__isnull=False) |
    #                                 Q(sizes__isnull=False)
    #                                 , name='price_or_size_required')
    #     ]





