from __future__ import absolute_import
from .base import *

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

secret_info = json.load(open(os.path.join(os.path.dirname(BASE_DIR), 'src', 'secret.json')))

DEBUG = False

ALLOWED_HOSTS = ['www.emilior.com', 'emilior.com', '18.222.171.163']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': secret_info['dbname'], 
        'USER': secret_info['dbuser'], 
        'PASSWORD': secret_info['dbpassword'], 
        'HOST': 'localhost',
        'PORT': '',
    }
}

