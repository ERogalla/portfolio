# Generated by Django 2.2.6 on 2019-10-22 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0010_project_markdown'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='markdown',
            field=models.FileField(blank=True, null=True, upload_to='markdown'),
        ),
    ]
