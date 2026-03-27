from django.db import migrations

def create_groups(apps, schema_editor):
    Group = apps.get_model('auth', 'Group')
    Group.objects.get_or_create(name='Teacher')
    Group.objects.get_or_create(name='Student')

def remove_groups(apps, schema_editor):
    Group = apps.get_model('auth', 'Group')
    Group.objects.filter(name__in=['Teacher', 'Student']).delete()

class Migration(migrations.Migration):
    dependencies = [
        ('students', '0002_load_departments'),
    ]
    operations = [
        migrations.RunPython(create_groups, remove_groups),
    ]