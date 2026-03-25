from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db.models import Q
from .models import Student, Department, Course

@login_required
def dashboard(request):
    context = {
        'total_students': Student.objects.filter(is_active=True).count(),
        'total_courses' : Course.objects.count(),
        'departments'   : Department.objects.count(),
        'recent'        : Student.objects.order_by('-enrolled_on')[:5],
    }
    return render(request, 'students/dashboard.html', context)

@login_required
def student_list(request):
    q    = request.GET.get('q', '')
    dept = request.GET.get('dept', '')
    qs   = Student.objects.filter(is_active=True)
    if q:
        qs = qs.filter(
            Q(first_name__icontains=q) |
            Q(last_name__icontains=q)  |
            Q(student_id__icontains=q))
    if dept:
        qs = qs.filter(department_id=dept)
    return render(request, 'students/list.html', {
        'students'   : qs,
        'departments': Department.objects.all(),
        'query'      : q,
    })

@login_required
def student_detail(request, pk):
    student = get_object_or_404(Student, pk=pk)
    return render(request, 'students/detail.html',
                  {'student': student})

@login_required
def student_create(request):
    if request.method == 'POST':
        # handle form POST
        messages.success(request, 'Student added!')
        return redirect('student-list')
    return render(request, 'students/form.html',
                  {'title': 'Add Student'})