from rest_framework.generics import ListAPIView, RetrieveAPIView
from projects.models import Project 
from .serializers import ProjectSerializer

class ProjectListView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class ProjectDetailView(RetrieveAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by('name')
    lookup_field = 'slug'