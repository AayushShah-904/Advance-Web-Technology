from django.core.management.base import BaseCommand
from django.contrib.auth.models import User, Group

class Command(BaseCommand):
    help = 'Create a teacher account'

    def handle(self, *args, **kwargs):
        if User.objects.filter(username='teacher1').exists():
            self.stdout.write(self.style.WARNING('Teacher account already exists!'))
            return

        user = User.objects.create_user(
            username='teacher1',
            password='teacher123',
            is_staff=True
        )
        group, _ = Group.objects.get_or_create(name='Teacher')
        user.groups.add(group)
        self.stdout.write(self.style.SUCCESS(
            'Teacher account created!\n'
            'Username: teacher1\n'
            'Password: teacher123'
        ))