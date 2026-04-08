from django.urls import path
from . import views

urlpatterns=[
    path('',views.homeview,name='home'),
    path('about',views.aboutview,name='about'),
    path('contact',views.contactview,name='contact'),
    path('home',views.homerender,name='homerender'),
    path('aboutre',views.aboutrender,name='aboutrender'),
    path('contactre',views.contactrender,name='contactrender'),
    path('student',views.student,name='student'),
    
]