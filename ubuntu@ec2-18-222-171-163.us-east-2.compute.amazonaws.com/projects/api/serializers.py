from rest_framework import serializers
from projects.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

        lookup_field = 'slug'
        extra_kwargs = {'url': {'lookup_field':'slug'}}