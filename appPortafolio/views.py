from django.shortcuts import render, redirect, reverse
from django.template.loader import get_template
from django.views.generic import (
    View,
    TemplateView,
    ListView,
    DetailView,
)
from django.http import HttpResponseServerError, request
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
import re

# Create your views here.


def re_nombre(nombre): return True if re.match(
    r'[a-zA-ZÀ-ÿ\s]{3,40}$', nombre) else False


def re_correo(correo): return True if re.match(
    r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', correo) else False


def re_mensaje(mensaje): return True if len(mensaje) >= 20 else False


def index(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        correo = request.POST.get('correo')
        mensaje = request.POST.get('mensaje')

        if re_nombre(nombre) & re_correo(correo) & re_mensaje(mensaje):
            enviar_correo(nombre, correo, mensaje)
            return render(request, "index.html")
        else:
            return render(request, "index.html")
    else:
        return render(request, "index.html")


def enviar_correo(nombre, correo, mensaje):

    context = {'nombre': nombre, 'correo': correo, 'mensaje': mensaje}
    template = get_template('correo.html')
    content = template.render(context)

    email = EmailMultiAlternatives(
        'Portafolio',
        'Solicitud Empleo',
        settings.EMAIL_HOST_USER,
        ['robertobetancourth96@gmail.com']
    )

    email.attach_alternative(content, 'text/html')
    email.send()


class Error404(TemplateView):
    template_name = 'index.html'
    

class Error500(TemplateView):
    template_name = 'index.html'
    @classmethod
    def as_error_view(cls):
        v = cls.as_view()
        def view(request):
            r = v(request)
            r.render()
            return r
        return view

