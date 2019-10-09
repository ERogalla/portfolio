from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('projects.api.urls')),
    path('admin/', admin.site.urls),
]

