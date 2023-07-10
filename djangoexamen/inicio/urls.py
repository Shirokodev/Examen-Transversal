from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='inicio'),
    path('quienes/', views.about, name='inicio-quienes'),
]