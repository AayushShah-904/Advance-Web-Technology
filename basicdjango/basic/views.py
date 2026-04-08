from django.shortcuts import render,redirect
from django.http import HttpResponse,response
from .models import Student
# Create your views here.

def homeview(request):
    return HttpResponse("Welcome to home page")

def aboutview(request):
    return HttpResponse("Welcome to About page")

def contactview(request):
    return HttpResponse("Welcome to Contact page")

def homerender(request):
    return render(response,'home.html')

def aboutrender(request):
    return render(response,'about.html')

def contactrender(request):
    return render(response,'contact.html')

def student(request):

    if request.method=='POST':
        name=request.POST.get('name')
        roll=request.POST.get('roll_number')
        email=request.POST.get('email')
        course=request.POST.get('course')

        Student.objects.create(
            name=name,
            roll_number=roll,
            email=email,
            course=course
        )

        Student.objects.create(
            name=request.POST.get('name'),
            roll_number=request.POST.get('roll_number'),
            email=request.POST.get('email'),
            course=request.POST.get('course')
        )

        return redirect('student')    
    all_students = Student.objects.all() 
    
    return render(request,'student.html',{'students':all_students})

def login(request):
    return render(request,'login.html')