from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='inicio'),
    path('quienes/', views.about, name='inicio-quienes'),
    path('guia/', views.guia, name='inicio-guia'),
    path('iniciosesion/', views.login, name='inicio-login'),
    path('nulman/', views.chatbot, name='inicio-chatbot'),
]