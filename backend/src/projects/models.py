from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField('Uploaded Image', null=True)
    hasImage = models.BooleanField(default=False)

    def __str__(self):
        return self.title
