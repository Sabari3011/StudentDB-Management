from django.urls import path , include
from myapp.views import StudentClass

urlpatterns = [
path('student/',StudentClass.as_view()),

]
