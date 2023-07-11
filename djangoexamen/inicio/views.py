from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

# Create your views here.

def home(request):
    return render(request, 'inicio/Index.html')

def about(request):
    return render(request, 'inicio/quienes.html')

def guia(request):
    return render(request, 'inicio/guia.html')

def login(request):
    return render(request, 'inicio/InicioSesion.html')

def chatbot(request):
    return render(request, 'inicio/nulman.html')