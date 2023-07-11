from django.urls import path
from . import views

urlpatterns = [
    path('login_user/', views.login_user, name="registros"),
    path('logout_user', views.logout_user, name="cerrarsesion"),
    path('register_user', views.register_user, name="registracion"),
]
