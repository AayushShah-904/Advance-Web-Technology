from django.contrib import admin
from .models import Student, Department, Course

# --- Basic registration ---
admin.site.register(Department)
admin.site.register(Course)

# --- Customised admin for Student ---
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):

    # columns shown in the list view
    list_display = [
        'student_id', 'full_name',
        'email', 'department', 'is_active'
    ]

    # sidebar filter panel
    list_filter = ['department', 'gender', 'is_active']

    # search box at the top
    search_fields = ['student_id', 'first_name',
                     'last_name', 'email']

    # make is_active togglable inline
    list_editable = ['is_active']

    # group fields inside the add/edit form
    fieldsets = (
        ('Personal Info', {
            'fields': ('first_name', 'last_name',
                       'email', 'phone', 'gender')
        }),
        ('Academic Info', {
            'fields': ('student_id', 'department', 'is_active')
        }),
    )