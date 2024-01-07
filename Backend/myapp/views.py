from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Studentdb
from .serializer import StudentSerializer
from rest_framework import status

# Create your views here.
class StudentClass(APIView):
    def get(self,req):
        student = Studentdb.objects.all()
        search = req.GET.get('s')
        if search :
            student = Studentdb.objects.filter(name__startswith = search)
        serializer = StudentSerializer(student,many = True)
        return Response(serializer.data)
    
    def post(self,req):
        data = req.data
        serializer = StudentSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message" : "created successfully"},status=status.HTTP_201_CREATED)
        return Response (serializer.errors)
    
    def put(self,req):
        data = req.data
        try :
            student = Studentdb.objects.get(id=data['id'])
            serializer = StudentSerializer(student,data = data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message" : "updated successfully"},status=status.HTTP_202_ACCEPTED)
            return Response (serializer.errors)
        except :
            return Response({"message" : "item not found"},status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,req):
        data = req.data
        id = req.GET.get('id')
        print("*********************************", data )
        try :
            student = Studentdb.objects.get(id=id)
            print(student,"*****************************")
            student.delete()
        
            return Response({"message" : "Deleted successfully"},status=status.HTTP_202_ACCEPTED)
        
        except :
            return Response({"message" : "item not found"},status=status.HTTP_400_BAD_REQUEST)
        