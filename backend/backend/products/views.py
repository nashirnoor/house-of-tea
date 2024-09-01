import gettext
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import Products,Categories

from .serializers import CatogerySerializerAR,CatogerySerializer


# Create your views here.
@api_view(['GET'])
def get_menu(request):
    print(request.META.get('HTTP_ACCEPT_LANGUAGE','did nt get'))
    if request.META.get('HTTP_ACCEPT_LANGUAGE','')=='ar':
        data=CatogerySerializerAR(Categories.objects.all(),many=True).data
    else:
        data=CatogerySerializer(Categories.objects.all(),many=True).data
        
    return JsonResponse({'data':data})