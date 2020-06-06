# Generated by Django 2.2.6 on 2019-10-19 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_hasimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='hasImage',
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(null=True, upload_to='media', verbose_name='Uploaded Image'),
        ),
    ]