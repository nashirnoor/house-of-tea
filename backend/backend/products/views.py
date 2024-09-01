import gettext
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import Products,Categories

from .serializers import CatogerySerializer
from django.utils.translation import gettext as _
from django.utils import translation


# Create your views here.
@api_view(['GET'])
def get_menu(request):
    translation.activate(request.headers.get('Accept-Language', 'ar'))
    data=CatogerySerializer(Categories.objects.all(),many=True).data
    print(_('hai'))
    return JsonResponse({'data':data,'message':_('hai')})