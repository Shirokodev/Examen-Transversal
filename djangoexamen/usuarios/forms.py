from typing import Any
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import password_validation
from django.utils.translation import gettext, gettext_lazy as _
from django import forms
  
class RegisterUserForm(UserCreationForm):  
    email = forms.EmailField(label=('Correo'), widget=forms.EmailInput(attrs={'class':'form-control'}))
    first_name = forms.CharField(max_length=50, label=('Nombre'), widget=forms.TextInput(attrs={'class':'form-control'}))
    last_name = forms.CharField(max_length=50, label=('Apellido'), widget=forms.TextInput(attrs={'class':'form-control'}))
    password1 = forms.CharField(     
        label='Contraseña',
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete': 'Nueva', 'class':'form-control'}),
        help_text=password_validation.password_validators_help_text_html(),
    )
    password2 = forms.CharField(
        label='Repite Contraseña',
        widget=forms.PasswordInput(attrs={'autocomplete': 'new-password', 'class':'form-control'}),
        strip=False,
        help_text=_('Ingresa la misma contraseña de antes'),
    )
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2')
        labels = {
            "username" : "Usuario",
            "first_name" : "Nombre",
            "last_name" : "Apellido",
            "email" : "Correo",
            "password1" : "Contraseña",
            "password2" : "Repetir Contraseña",
        }
    def __init__(self, *args: Any, **kwargs):
        super(RegisterUserForm, self ).__init__(*args, **kwargs)
        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['class'] = 'form-control'