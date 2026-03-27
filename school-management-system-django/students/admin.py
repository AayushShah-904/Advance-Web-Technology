import secrets
import string
from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.contrib import messages
from .models import Student, Department, Course

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('student_id', 'full_name', 'email', 'department', 'is_active')
    
    def save_model(self, request, obj, form, change):
        # Only create a user if this is a NEW student (not an update)
        if not change or not obj.user:
            # 1. Generate password: student_id + 5 random chars
            random_suffix = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(5))
            generated_password = f"{obj.student_id}{random_suffix}"

            # 2. Create the Auth User
            user = User.objects.create_user(
                username=obj.student_id,
                password=generated_password,
                email=obj.email,
                first_name=obj.first_name,
                last_name=obj.last_name
            )

            # 3. Add to Student group
            student_group, _ = Group.objects.get_or_create(name='Student')
            user.groups.add(student_group)

            # 4. Link to Student object
            obj.user = user
            
            # 5. Alert the Admin of the password
            self.message_user(
                request, 
                f"CREDENTIALS CREATED - Username: {obj.student_id} | Password: {generated_password}", 
                level=messages.SUCCESS
            )

        super().save_model(request, obj, form, change)

# --- Customised admin for Student ---
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


# Register others normally
admin.site.register(Department)
admin.site.register(Course)