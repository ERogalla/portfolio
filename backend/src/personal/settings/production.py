from __future__ import absolute_import
from .base import *

DEBUG = False

ALLOWED_HOSTS = ['www.emilior.com', 'emilior.com', '18.222.171.163']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'testproject',
        'USER': 'testprojectuser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

