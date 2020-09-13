from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import generics 
from .models import Todo
# Create your views here.
class TodoView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
