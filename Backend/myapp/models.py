from django.db import models

# Create your models here.

class Studentdb(models.Model):
    name = models.CharField( max_length=50)
    registerno = models.IntegerField()
    course = models.CharField(max_length=50)
    fee = models.IntegerField()