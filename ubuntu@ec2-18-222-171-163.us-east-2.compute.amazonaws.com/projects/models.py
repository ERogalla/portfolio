from django.db import models
from django.conf import settings

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField('Uploaded Image', upload_to='media', null=True, blank=True)

    slug = models.SlugField(max_length=20, default="hello")
    markdown = models.FileField(upload_to='markdown', blank=True, null=True)


    def __str__(self):
        return self.title
