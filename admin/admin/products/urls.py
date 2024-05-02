from django.contrib import admin
from django.urls import path

from .views import ProductViewSet

urlpatterns = [
    path('products/', ProductViewSet({
        'get': 'list',
        'post': 'create'
    })),
    path('products/<str:pk>', ProductViewSet({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]
