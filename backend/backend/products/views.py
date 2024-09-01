import gettext
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import Products,Categories

from .serializers import CatogerySerializer
from django.utils.translation import gettext 
# Create your views here.
@api_view(['GET'])
def get_menu(request):
    data=CatogerySerializer(Categories.objects.all(),many=True).data
    print(gettext('hai'))
    return JsonResponse({'data':data,'message':gettext('hai')})