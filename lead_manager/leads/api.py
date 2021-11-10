from rest_framework.decorators import permission_classes
from leads.models import Lead
from rest_framework import serializers, viewsets, permissions
from .serializers import LeadSerializer

# Lead viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [permissions.AllowAny]
    serializers_class = LeadSerializer 