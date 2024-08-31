from django.urls import path

from .views import send_review

urlpatterns = [
    path('send',send_review)
]