from .base import *

# SECURITY WARNING: don't run with debug turned on in production!

DEBUG = True

ALLOWED_HOSTS = []

STATIC_ROOT = os.path.join(BASE_DIR, '/static/')

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases
#

"""
Generalmente este archivo lo utlizo para hacer pruebas con una base de datos en local, en este portafolio no lo utilizare
pero como seguire ampliandolo lo agregare.
"""
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '5432',
    }
}
