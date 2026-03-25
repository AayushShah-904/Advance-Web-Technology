from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name


class Student(models.Model):
    GENDER = [('M','Male'),('F','Female'),('O','Other')]

    student_id  = models.CharField(max_length=20, unique=True)
    first_name  = models.CharField(max_length=100)
    last_name   = models.CharField(max_length=100)
    email       = models.EmailField(unique=True)
    phone       = models.CharField(max_length=15, blank=True)
    gender      = models.CharField(max_length=1, choices=GENDER)
    department  = models.ForeignKey(
                    Department,
                    on_delete=models.SET_NULL,
                    null=True)
    enrolled_on = models.DateField(auto_now_add=True)
    is_active   = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.student_id} – {self.first_name} {self.last_name}"

    def full_name(self):
        return f"{self.first_name} {self.last_name}"


class Course(models.Model):
    name       = models.CharField(max_length=200)
    code       = models.CharField(max_length=20, unique=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    credits    = models.PositiveIntegerField(default=3)

    def __str__(self):
        return f"{self.code} – {self.name}"