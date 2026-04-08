from django.db import models

# Create your models here.

class Student(models.Model):
    name=models.CharField(max_length=100)
    roll_number=models.CharField(max_length=20)
    email=models.EmailField(max_length=50)
    course=models.CharField(max_length=100)

    