"""
WSGI config for portafolioDevDir project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

from dj_static import Cling
from whitenoise import WhiteNoise
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'portafolioDevDir.settings.local')

# application = get_wsgi_application()

# Me ayuda a que se vean los archivos staticos en heroku
application = Cling(get_wsgi_application())
application = WhiteNoise(application)

