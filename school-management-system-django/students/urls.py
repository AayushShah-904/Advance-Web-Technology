from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/',          views.dashboard,       name='dashboard'),
    path('students/',           views.student_list,    name='student-list'),
    path('students/add/',       views.student_create,  name='student-create'),
    path('students/<int:pk>/', views.student_detail,  name='student-detail'),
]