from rest_framework import serializers
from .models import Studentdb


class StudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Studentdb
        fields = '__all__'