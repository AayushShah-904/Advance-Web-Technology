from django.db import migrations

def add_departments(apps, schema_editor):
    Department = apps.get_model('students', 'Department')
    departments = [
        {'name': 'Computer Science',       'code': 'CS'},
        {'name': 'Information Technology', 'code': 'IT'},
        {'name': 'Mechanical Engineering', 'code': 'ME'},
        {'name': 'Civil Engineering',      'code': 'CE'},
        {'name': 'Electronics',            'code': 'EC'},
        {'name': 'Mathematics',            'code': 'MATH'},
    ]
    for d in departments:
        Department.objects.get_or_create(code=d['code'], defaults={'name': d['name']})

def remove_departments(apps, schema_editor):
    pass  # don't delete — data may be in use

class Migration(migrations.Migration):
    dependencies = [
        ('students', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(add_departments, remove_departments),
    ]