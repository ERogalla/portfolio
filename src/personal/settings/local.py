from __future__ import absolute_import
from .base import *
from os.path import join, normpath

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

ALLOWED_HOSTS = ['http://127.0.0.1', '127.0.0.1', 'http://localhost', 'localhost']
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': normpath(join(BASE_DIR, 'default.db')),
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}

INTERNAL_IPS = ('127.0.0.1',)
