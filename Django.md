# DJANGO — UNIT 3 COMPLETE EXAM-READY NOTES
### Based strictly on uploaded PDF content (239 pages)

---

## COMPLETE TABLE OF CONTENTS

1. What is Django? / Introduction
2. How Django Works (MVT Overview)
3. Django History & Versions
4. Features of Django
5. Django vs MVC — MVT Design Pattern
6. MVT Architecture Flow (Diagram Explained)
7. Django Installation & Setup
8. Virtual Environment Setup
9. Creating a Django Project
10. Django Project File Structure
11. Running the Django Development Server
12. Creating a Django App
13. Django Views
14. Django URLs & URL Routing (path() function)
15. Django Templates
16. Django Models
17. SQLite Database (Default)
18. Django ORM (Object-Relational Mapping)
19. Model Fields — Field Types
20. Model Fields — Field Options
21. Model Relationships (ForeignKey, ManyToMany, OneToOne)
22. Meta Class in Models
23. Django Migrations (makemigrations, migrate, sqlmigrate, showmigrations)
24. CRUD Operations via Django Shell (Insert, Update, Delete, Read)
25. Update Model (Adding New Fields)
26. Database Engines Supported by Django
27. Database Configuration in settings.py (SQLite, PostgreSQL, MySQL, Oracle)
28. PostgreSQL Setup with Django on Ubuntu
29. PostgreSQL Setup with Django on Windows
30. Oracle Database with Django (Windows)
31. MySQL Database with Django
32. Django Middleware
33. Django Middleware Architecture
34. Old vs New Middleware (pre/post 1.10)
35. Creating Custom Middleware
36. Activating Middleware
37. Other Middleware Methods (process_view, process_exception, etc.)
38. Connecting Database using ORM (Step-by-step)
39. Django Project Layout Diagram
40. Choices Field in Models

---

## UNIT OVERVIEW

This unit covers **Django**, a Python-based open-source web framework. Topics range from installation and project setup, through the MVT architecture, models, ORM, migrations, database connectivity (SQLite, PostgreSQL, MySQL, Oracle), and Django Middleware. The unit is practical and theory-heavy for exams.

---

## TOPIC 1 — WHAT IS DJANGO?

### Definition
Django is a **free and open-source, high-level Python web framework** that encourages rapid development and clean, pragmatic design. It emphasizes **reusability of components** (DRY — Don't Repeat Yourself).

### Key Points
- Written in **Python**
- Follows **MVT (Model-View-Template)** design pattern
- Tagline: *"The web framework for perfectionists with deadlines"*
- Maintained by the **Django Software Foundation (DSF)**
- Originally developed in **2003** at Lawrence Journal-World newspaper
- Publicly released as open-source: **July 21, 2005**
- Named after guitarist **Django Reinhardt**
- Original authors: **Adrian Holovaty, Simon Willison**
- Latest version referenced in PDF: **Django 4.0.3** (March 2022)
- Used by: **YouTube, Google, Dropbox, Yahoo Maps, Mozilla, Instagram, Washington Times, NASA**

### Explanation
Django is a **web application framework** — a code library that makes web development faster and easier by providing common patterns. Unlike a library (which you call), a framework calls your code — it provides the structure.

### Exam Notes
- DRY = Don't Repeat Yourself
- Django is NOT just a library; it is a **framework**
- The key difference: a framework provides the skeleton; you fill in the logic
- Django comes with ready-to-use features: login system, database connection, CRUD operations

---

## TOPIC 2 — HOW DJANGO WORKS (MVT Overview)

### Definition
Django follows the **MVT design pattern** — Model, View, Template.

### Components
| Component | Role |
|-----------|------|
| **Model** | Data you want to present — from a database. Located in `models.py` |
| **View** | Request handler — returns relevant template + content. Located in `views.py` |
| **Template** | HTML file containing layout of the web page with Django tags. Located in `templates/` folder |

### Request-Response Flow (Exam Favourite!)
When the browser requests a URL, this happens step-by-step:
1. Django receives the URL → checks **urls.py** → calls the matching view
2. The **view** (in views.py) checks relevant models
3. Models are imported from **models.py**
4. View sends data to a specified **template** in the templates folder
5. Template contains HTML + Django tags → returns finished HTML to browser

### Exam Notes
- Models → `models.py`
- Views → `views.py`
- Templates → `templates/` folder
- URLs → `urls.py`

---

## TOPIC 3 — DJANGO HISTORY & VERSIONS

### Timeline
- **2003** — Django designed and developed by Lawrence Journal-World
- **July 21, 2005** — Publicly released under BSD license
- **2008** — Version 1.0 launched
- **2017** — Version 2.0 launched (first Python 3-only release)
- **2018** — Current stable version 2.0.3

### Important Version Highlights
| Version | Key Feature |
|---------|-------------|
| 1.0 | API stability, decoupled admin, unicode |
| 1.5 | Python 3 support, configurable user model |
| 1.7 | Migrations, application loading |
| 1.9 | Automatic password validation |
| 1.11 LTS | Last version to support Python 2.7 |
| 2.0 | First Python 3-only, simplified URL routing, mobile-friendly admin |

### Exam Notes
- Django 1.6 was dedicated to **Malcolm Tredinnick**
- LTS = Long Term Support
- Django 2.0 dropped Python 2 support

---

## TOPIC 4 — FEATURES OF DJANGO

### Top 5 Features (Very Exam Important!)

**1. Fast**
- Designed for rapid development from concept to completion as quickly as possible

**2. Fully Loaded**
- Comes with dozens of built-in extras: user authentication, content administration, sitemaps, RSS feeds

**3. Secure**
- Protects against: **SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), clickjacking**
- Has secure user authentication system for managing accounts and passwords

**4. Scalable**
- Used by the busiest sites on the planet
- Can quickly and flexibly scale to meet heaviest traffic demands

**5. Versatile**
- Used for: content management systems, social networks, scientific computing platforms
- Used by companies, organizations, and governments

**6. Open Source** — free to use and modify

**7. Vast and Supported Community**

### Exam Notes
- Security features to remember: SQL injection, XSS, CSRF, clickjacking
- Scalability = can handle heavy traffic
- DRY principle = reusability

---

## TOPIC 5 — MVT DESIGN PATTERN (Very Important!)

### Definition
MVT (Model-View-Template) is Django's software design pattern. It is a variation of the classic MVC (Model-View-Controller) pattern.

### Key Difference: MVT vs MVC
- In classic MVC: Controller manages interactions between Model and View
- In Django's MVT: **Django itself acts as the Controller** — you don't write it separately
- This is why it's called MVT not MVC
- The Template replaces the View from MVC; Django's View handles business logic

### Three Components in Detail

**Model (Data Access Layer)**
- Handles database access, validation, and relationships
- Python classes that mediate between Django ORM and database tables
- Defined in `models.py`

**View (Business Logic Layer)**
- Bridge between Models and Templates
- A view accesses model data → redirects to template for presentation
- Describes **what data you see**, not how you see it
- Defined in `views.py`

**Template (Presentation Layer)**
- Handles User Interface completely
- HTML files mixed with Django Template Language (DTL)
- Uses Django tags for logic, e.g., `{{ firstname }}`, `{% for item in list %}`

### MVT Request-Response Flow Diagram (Explained)
```
User/Browser
    ↓ HTTP Request (URL)
Django (acts as Controller)
    ↓ Checks urls.py → matches URL → calls View
View (views.py)
    ↓ Interacts with Model
Model (models.py) ←→ Database
    ↓ Returns data to View
View → selects Template
Template (HTML + DTL)
    ↓ Renders HTML
Django → Sends HTTP Response back to Browser
```

### Exam Notes
- Django framework itself handles the "Controller" part → no separate controller
- MVT is NOT MVC, though they are similar
- Template = Presentation; View = Business Logic; Model = Data

---

## TOPIC 6 — DJANGO INSTALLATION & SETUP

### Prerequisites
- Python must be installed: `python --version`
- PIP must be installed: `pip --version`

### Step 1: Check Python
```bash
python --version       # Windows
python3 --version      # Unix/MacOS
```
Output: `Python 3.9.2`

### Step 2: Create Virtual Environment

**Why Virtual Environment?**
- Dedicated isolated environment for each project
- Avoids version conflicts between projects
- Uses `venv` (built into Python)

```bash
# Windows
py -m venv myworld

# Unix/MacOS
python -m venv myworld
```
This creates a `myworld` folder with: `Include/`, `Lib/`, `Scripts/`, `pyvenv.cfg`

### Step 3: Activate Virtual Environment
```bash
# Windows
myworld\Scripts\activate.bat

# Unix/MacOS
source myworld/bin/activate
```
Prompt becomes: `(myworld) C:\Users\Your Name>`

### Step 4: Install Django
```bash
# Windows
py -m pip install Django

# Unix/MacOS
python -m pip install Django

# Ubuntu/Linux (specific version)
pip3 install django==2.0.3
```

### Step 5: Verify Django Installation
```bash
django-admin --version
# Output: 4.1.2
```
Or in Python shell: `import django` then `django.VERSION`

### Exam Notes
- Always install Django **inside** the virtual environment
- `venv` = Virtual Environment tool included in Python
- Windows uses `py`, Unix/MacOS uses `python`
- PIP = Package Installer for Python (comes with Python 3.4+)

---

## TOPIC 7 — CREATING A DJANGO PROJECT

### Command
```bash
django-admin startproject my_tennis_club
```

### Files Created
```
my_tennis_club/
├── manage.py
└── my_tennis_club/
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

### File Purposes
| File | Purpose |
|------|---------|
| `manage.py` | Django project management script (run server, migrations, shell, etc.) |
| `__init__.py` | Marks directory as a Python package |
| `settings.py` | All project settings (database, installed apps, middleware, etc.) |
| `urls.py` | URL declarations for the project (root URL configuration) |
| `wsgi.py` | WSGI entry point for web servers |
| `asgi.py` | ASGI entry point for async web servers |

### Run the Server
```bash
cd my_tennis_club
py manage.py runserver
```
Output: `Starting development server at http://127.0.0.1:8000/`

Access at browser: `127.0.0.1:8000`

### Exam Notes
- Default port: **8000**
- Development server: no need for Apache/Nginx
- `manage.py` = command-line utility for administrative tasks

---

## TOPIC 8 — DJANGO PROJECT LAYOUT (Diagram)

### Visual Structure
```
django_project/               ← Main Folder (Blue)
├── django_project/           ← Package Folder (Orange)
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── apps/                     ← Apps Folder (Orange)
│   ├── app_1/                ← Sub Folder (Teal)
│   ├── app_2/
│   └── app_n/
│       ├── migrations/
│       ├── admin.py
│       ├── apps.py
│       ├── __init__.py
│       ├── models.py
│       ├── tests.py
│       └── views.py
├── templates/
├── static/
├── media/
└── virtual_env/
```

---

## TOPIC 9 — CREATING A DJANGO APP

### What is an App?
An **app** is a web application with a specific meaning in your project — e.g., a home page, contact form, or members database. A project can have multiple apps.

### Command
```bash
py manage.py startapp members
```

### Files Created
```
members/
├── migrations/
│   └── __init__.py
├── __init__.py
├── admin.py
├── apps.py
├── models.py
├── tests.py
└── views.py
```

### Register App in settings.py
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'members'   # ← Add your app here
]
```

### Exam Notes
- App must be added to `INSTALLED_APPS` in `settings.py`
- Each app has its own `models.py`, `views.py`, `urls.py`
- Command: `manage.py startapp <appname>`

---

## TOPIC 10 — DJANGO VIEWS

### Definition
A Django view is a **Python function or method** that takes an HTTP request as an argument and returns an HTTP response (like HTML documents).

### Basic View Example
```python
# my_tennis_club/members/views.py
from django.shortcuts import render
from django.http import HttpResponse

def members(request):
    return HttpResponse("Hello world!")
```

### View Using Template
```python
from django.http import HttpResponse
from django.template import loader

def members(request):
    template = loader.get_template('myfirst.html')
    return HttpResponse(template.render())
```

### Key Points
- Views are in `views.py` inside each app folder
- A view receives an HTTP request → processes → returns HTTP response
- Views import models to get data and pass it to templates

### Polls App Example
```python
# polls/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
```

---

## TOPIC 11 — DJANGO URLs

### Definition
URL configuration (URLconf) maps URL patterns to view functions.

### App-Level urls.py
```python
# members/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
]
```

### Project-Level urls.py
```python
# my_tennis_club/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('members.urls')),
    path('admin/', admin.site.urls),
]
```

### path() Function Arguments
| Argument | Required | Description |
|----------|----------|-------------|
| `route` | Yes | String with URL pattern to match |
| `view` | Yes | View function to call when URL matches |
| `kwargs` | No | Additional keyword arguments to pass to view |
| `name` | No | Name for the URL (for reverse URL resolution) |

### How URL Matching Works
- Django starts at the **first pattern** in `urlpatterns`
- Goes down the list comparing the requested URL to each pattern
- Calls the view for the **first match** found

### `include()` Function
- Used to include URL configurations from other apps
- Allows modular URL design

### Exam Notes
- `include()` must be imported to use app-level URLs
- `name` parameter allows URL reversal using `reverse()` or `{% url %}` tag
- Route is processed top-to-bottom

---

## TOPIC 12 — DJANGO TEMPLATES

### Definition
A template is a file (usually HTML) that describes how the result should be **presented**. Django uses **Django Template Language (DTL)** for adding logic.

### Creating Templates
```
members/
└── templates/
    └── myfirst.html
```

### Template File Example
```html
<!-- myfirst.html -->
<!DOCTYPE html>
<html>
<body>
  <h1>Hello World!</h1>
  <p>Welcome to my first Django project!</p>
</body>
</html>
```

### Django Template Tags
```html
<!-- Variable -->
<p>My name is {{ firstname }}.</p>

<!-- Loop -->
{% for post in posts %}
  <td>{{ post.title }}</td>
{% endfor %}
```

### Key Points
- Templates are `.html` files with HTML + DTL
- `{{ variable }}` — outputs a variable value
- `{% tag %}` — logic tags (loops, conditionals)
- Templates folder inside each app: `app_name/templates/`

---

## TOPIC 13 — DJANGO MODELS

### Definition
A Django model is a **single, definitive source of information about data**. It is a Python class that represents a **database table**.

**Key Rule:** Each model maps to a **single database table**.

### Model Creation Example
```python
# members/models.py
from django.db import models

class Member(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
```

### What Happens When You Create a Model?
- Django creates a table named `appname_modelname` (e.g., `members_member`)
- Django automatically adds an **id field** as primary key (auto-increment)
- Model class must subclass `django.db.models.Model`

### SQLite Database (Default)
- Created automatically when you create a Django project
- File: `db.sqlite3` in the project root folder
- Great for development/testing, NOT for production

### Person Model Example (from PDF)
```python
from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
```

### Employee Model Example
```python
from django.db import models

class Employee(models.Model):
    eid = models.CharField(max_length=20)
    ename = models.CharField(max_length=100)
    econtact = models.CharField(max_length=15)

    class Meta:
        db_table = "employee"
```

### Exam Notes
- Each attribute of the model = a column in the database
- Model class subclasses `django.db.models.Model`
- `db_table` in Meta class = custom table name

---

## TOPIC 14 — MODEL FIELDS — FIELD TYPES

### What are Field Types?
Field types define the **data type of each column** in the database table.

### Common Field Types
| Field Type | Description |
|-----------|-------------|
| `AutoField()` | Integer that auto-increments (used for primary keys) |
| `BooleanField()` | Stores True/False, used for checkboxes |
| `CharField(max_length=N)` | String field for small to large-sized strings |
| `DateField()` | Date field, represents Python `datetime.date` instance |
| `DateTimeField()` | Date and time field |
| `IntegerField()` | Stores values from -2147483648 to 2147483647 |
| `FloatField()` | Stores floating point numbers |
| `TextField()` | Large text field (unlimited length) |
| `EmailField()` | CharField that validates email address format |

### Special/Relationship Fields
| Field Type | Description |
|-----------|-------------|
| `ForeignKey()` | Many-to-one relationship |
| `ManyToManyField()` | Many-to-many relationship |
| `OneToOneField()` | One-to-one relationship |

### Exam Notes
- `CharField` needs `max_length` argument (required)
- `AutoField` is automatically added by Django as `id` unless overridden
- `TextField` vs `CharField`: TextField = no max length limit

---

## TOPIC 15 — MODEL FIELDS — FIELD OPTIONS

### Definition
Field options are used to **customize and add constraints** to table columns.

### Common Field Options
| Option | Description |
|--------|-------------|
| `null=True` | Stores empty values as NULL in database |
| `blank=True` | If True, field is allowed to be blank in forms |
| `default=value` | Sets a default value for the field |
| `primary_key=True` | This field will be the primary key |
| `unique=True` | Puts unique constraint on the column |
| `max_length=N` | Maximum length for CharField/EmailField |

### Example
```python
name = models.CharField(max_length=60)
phone = models.IntegerField(null=True)
joined_date = models.DateField(null=True)
```

### Difference: null vs blank
- `null=True` → database level (stores NULL in DB)
- `blank=True` → validation level (allows empty string in forms)

### Exam Notes
- Common mistake: using `null=True` for CharField (use `blank=True` instead for strings)
- `null=True` is mainly for non-string fields like IntegerField, DateField

---

## TOPIC 16 — MODEL RELATIONSHIPS

### Three Types (Exam Important!)

### 1. Many-to-One (ForeignKey)
- Use `ForeignKey`
- Example: Many Cars → one Manufacturer

```python
class Manufacturer(models.Model):
    pass

class Car(models.Model):
    manufacturer = models.ForeignKey(
        Manufacturer,
        on_delete=models.CASCADE
    )
```

`on_delete=models.CASCADE` means: when Manufacturer is deleted, all related Cars are also deleted.

### 2. Many-to-Many (ManyToManyField)
- Use `ManyToManyField`
- Example: A Pizza has multiple Toppings; a Topping can be on multiple Pizzas

```python
class Topping(models.Model):
    pass

class Pizza(models.Model):
    toppings = models.ManyToManyField(Topping)
```

### 3. One-to-One (OneToOneField)
- Use `OneToOneField`
- Example: User profile — one user has exactly one profile

```python
from django.conf import settings
from django.db import models

class MySpecialUser(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    supervisor = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='supervisor_of', on_delete=models.CASCADE)
```

### Exam Notes
- ForeignKey = many-to-one (most common)
- `on_delete` is a required argument for ForeignKey
- ManyToManyField can be on either side of the relationship

---

## TOPIC 17 — META CLASS IN MODELS

### Definition
The `Meta` class is an **inner class** inside a model that provides metadata — configuration options that are not fields.

### Example
```python
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ["name"]       # Order results by name
        db_table = "students"     # Custom table name in DB
```

### Key Meta Options
| Option | Description |
|--------|-------------|
| `ordering` | Default ordering for QuerySets |
| `db_table` | Custom name for the database table |
| `verbose_name` | Human-readable name for the model |
| `unique_together` | Fields that must be unique together |

### Exam Notes
- `Meta` is about how the model behaves — not about data itself
- `db_table` overrides Django's default naming convention (`appname_modelname`)

---

## TOPIC 18 — DJANGO ORM

### Definition
**Django ORM (Object-Relational Mapping)** is a tool that allows developers to interact with databases using **Python objects** instead of SQL queries.

### How It Works (Diagram Explanation from PDF)
```
Without ORM (SQL):
Database → Complex SQL query (makes developer sad 😟)
CREATE TABLE "pages_page" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
"title" varchar(60) NOT NULL, ...)

With Django ORM (Python):
Database → Simple Python class (makes developer happy 😊)
class Page():
    title = CharField
    permalink = CharField
    update_date = DateTimeField
    bodytext = TextField
```

### Key Concepts
- Each database **table** = Python **class**
- Each **row** = instance of the class
- Each **column** = class attribute (field)

### ORM Features
- **Abstraction**: No need to write raw SQL
- **QuerySets**: Collections of database queries — can be filtered, sliced, manipulated
- **Automatic Query Generation**: Django generates SQL automatically
- **Model Definitions**: Python classes define structure including fields and types

### Django ORM Rules
1. Each Model is a Python class that subclasses `django.db.models.Model`
2. Each attribute of the model represents a database field
3. Django gives an automatically-generated database-access API

### Exam Notes
- ORM = Python objects ↔ Database tables
- ORM handles SQL differences across platforms (PostgreSQL, MySQL, SQLite, Oracle)
- QuerySets are lazy — they don't hit the DB until evaluated

---

## TOPIC 19 — DJANGO MIGRATIONS

### Definition
**Migrations** are Django's way of propagating changes made to models into the **database schema**. Think of them as a **version control system for your database schema**.

### Four Migration Commands (Exam Critical!)

| Command | Purpose |
|---------|---------|
| `makemigrations` | Creates migration files based on model changes (like "commit") |
| `migrate` | Applies/unapplies migrations to the database (like "push") |
| `sqlmigrate` | Shows the raw SQL statements for a migration |
| `showmigrations` | Lists all migrations and their status |

### Migration Workflow (Step by Step)

**Step 1: Create/modify model in models.py**

**Step 2: Create migration file**
```bash
py manage.py makemigrations members
```
Output:
```
Migrations for 'members':
  members\migrations\0001_initial.py
    - Create model Member
```

**Step 3: Apply migration to database**
```bash
py manage.py migrate
```
Output:
```
Applying members.0001_initial... OK
```

**Step 4: View SQL (optional)**
```bash
py manage.py sqlmigrate members 0001
```
Output:
```sql
BEGIN;
CREATE TABLE "members_member" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "firstname" varchar(255) NOT NULL,
  "lastname" varchar(255) NOT NULL
);
COMMIT;
```

### Migration File Example
```python
# members/migrations/0001_initial.py
from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, ...)),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
            ],
        ),
    ]
```

### Important Migration Notes
- Migrations are consistent: what happens in dev = what happens in production
- Django will make migrations for **any** change to models — even non-DB-affecting options
- Migration files stored in `app_name/migrations/` folder
- `makemigrations` = packaging changes (like commits)
- `migrate` = applying to database (like deploying)

### Backend Support
- Django ships with support for: **SQLite, PostgreSQL, MariaDB, MySQL, Oracle**
- PostgreSQL is the most capable database for schema support
- Uses `SchemaEditor` class for schema alteration

### Exam Notes
- migrations = version control for DB schema
- Always run `makemigrations` BEFORE `migrate`
- Django auto-adds an `id` (BigAutoField) primary key unless you define your own

---

## TOPIC 20 — CRUD OPERATIONS VIA DJANGO SHELL

### Opening the Shell
```bash
py manage.py shell
```

### Import Model
```python
>>> from members.models import Member
```

### READ (View All Records)
```python
>>> Member.objects.all()
<QuerySet []>

>>> Member.objects.all().values()
<QuerySet [{'id': 1, 'firstname': 'Emil', 'lastname': 'Refsnes'}, ...]>
```

### CREATE (Insert One Record)
```python
>>> member = Member(firstname='Emil', lastname='Refsnes')
>>> member.save()
```

### CREATE (Insert Multiple Records)
```python
>>> member1 = Member(firstname='Tobias', lastname='Refsnes')
>>> member2 = Member(firstname='Linus', lastname='Refsnes')
>>> members_list = [member1, member2]
>>> for x in members_list:
...     x.save()
```

### UPDATE (Modify a Record)
```python
>>> x = Member.objects.all()[4]     # Get record at index 4
>>> x.firstname                     # Check value
'Stale'
>>> x.firstname = "Stalikken"       # Change value
>>> x.save()                        # Save to DB
```

### DELETE (Remove a Record)
```python
>>> x = Member.objects.all()[5]
>>> x.firstname
'Jane'
>>> x.delete()
(1, {'members.Member': 1})    # Returns (count_deleted, {model: count})
```

### Exam Notes
- `Member.objects.all()` returns a QuerySet
- `.values()` returns values as a list of dictionaries
- `object.save()` is required to actually write to DB
- `.delete()` returns a tuple: (number_deleted, {model: count})
- `QuerySet` = a collection of data from a database

---

## TOPIC 21 — UPDATE MODEL (Adding New Fields)

### Adding Fields to Existing Model
```python
# members/models.py
from django.db import models

class Member(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    phone = models.IntegerField(null=True)      # New field
    joined_date = models.DateField(null=True)   # New field
```

### Why `null=True`?
If you add new non-nullable fields to a table that **already has records**, Django will prompt you for a default value. Using `null=True` avoids this issue.

### Migration Steps for Updated Model
```bash
py manage.py makemigrations members
# Output: 0002_member_joined_date_member_phone.py

py manage.py migrate
# Output: Applying members.0002_member_joined_date_member_phone... OK
```

### Inserting Data into New Fields (via Shell)
```python
>>> from members.models import Member
>>> x = Member.objects.all()[0]
>>> x.phone = 5551234
>>> x.joined_date = '2022-01-05'
>>> x.save()
```

---

## TOPIC 22 — CHOICES FIELD

### Definition
A `choices` option restricts a field to a sequence of **2-tuples** — the actual stored value and the display value.

### Example
```python
YEAR_IN_SCHOOL_CHOICES = [
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
    ('GR', 'Graduate'),
]
```

### Usage in Model
```python
year = models.CharField(max_length=2, choices=YEAR_IN_SCHOOL_CHOICES)
```

### Key Points
- Default form widget becomes a **select box** (dropdown)
- First element = stored in DB; Second element = displayed to user
- Limits choices to only the defined values

---

## TOPIC 23 — DATABASE ENGINES SUPPORTED BY DJANGO

### Default Database
- **SQLite** — great for testing/debugging at beginning of project; NOT suitable for production

### Supported Databases
1. **SQLite** — default, file-based, no server needed
2. **PostgreSQL** — most capable, recommended for production
3. **MariaDB** — MySQL-compatible open source
4. **MySQL** — popular open-source RDBMS
5. **Oracle** — enterprise-grade RDBMS

### Exam Notes
- Default Django DB = **SQLite** (file: `db.sqlite3`)
- For production: use **PostgreSQL** (most capable schema support)
- Each DB requires its own driver/adapter

---

## TOPIC 24 — DATABASE CONFIGURATION IN settings.py

### SQLite (Default)
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

### PostgreSQL Configuration
```bash
pip install psycopg2
```
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### MySQL Configuration
```bash
pip install mysqlclient
```
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'djangoApp',
        'USER': 'root',
        'PASSWORD': 'mysql',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### Oracle Configuration
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'XE',
        'USER': 'gktcs',
        'PASSWORD': 'gktcs',
        'HOST': 'localhost',
        'PORT': '1521',
    }
}
```

### Engine Strings Summary (Exam Critical!)
| Database | ENGINE string |
|----------|--------------|
| SQLite | `django.db.backends.sqlite3` |
| PostgreSQL | `django.db.backends.postgresql` |
| MySQL | `django.db.backends.mysql` |
| Oracle | `django.db.backends.oracle` |

---

## TOPIC 25 — POSTGRESQL SETUP WITH DJANGO (Ubuntu)

### Install Required Packages
```bash
sudo apt-get update
sudo apt-get install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx
```
Installs: pip, Python dev files, Postgres, Postgres libraries, Nginx web server

### PostgreSQL Commands
```bash
# Login to PostgreSQL
sudo -u postgres psql

# Create database
postgres=# CREATE DATABASE mydatabase;

# Create user
postgres=# CREATE USER myprojectuser WITH PASSWORD '12345';

# Set encoding
postgres=# ALTER ROLE myprojectuser SET client_encoding TO 'utf8';

# Set transaction isolation
postgres=# ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';

# Set timezone
postgres=# ALTER ROLE myprojectuser SET timezone TO 'UTC';

# Grant privileges
postgres=# GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myprojectuser;

# Exit
postgres=# \q
```

### Create Virtual Environment
```bash
sudo -H pip3 install virtualenv
virtualenv ENV
source ENV/bin/activate
pip install django gunicorn psycopg2
```

### Create Django Project
```bash
django-admin.py startproject Myproject
```

### settings.py Adjustments
```python
ALLOWED_HOSTS = ['your_server_domain_or_IP', '203.0.113.5']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mydatabase',
        'USER': 'myprojectuser',
        'PASSWORD': '12345',
        'HOST': 'localhost',
        'PORT': '',
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
```

### Post-Setup Commands
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py collectstatic
python manage.py runserver 8000
```

### Exam Notes
- `psycopg2` = Python adapter for PostgreSQL
- `gunicorn` = production WSGI server
- `ALLOWED_HOSTS` = security setting (prevent host header attacks)
- PostgreSQL default port = **5432**
- `collectstatic` = gathers static files into STATIC_ROOT

---

## TOPIC 26 — POSTGRESQL WITH DJANGO (Windows)

### Steps
1. Install Python 3 (check "Add Python 3 to path")
2. Install virtualenv: `pip install virtualenv`
3. Install PostgreSQL (default port 5432, set password for `postgres` superuser)
4. Create virtual environment: `virtualenv your_project_name`
5. Activate: `\Environment Name\Scripts\activate.bat`
6. Install psycopg2: `pip install psycopg2`
7. Install Django: `pip install django`
8. Create project: `Django-admin startproject myproject`
9. Configure settings.py DATABASES section
10. Create superuser: `python manage.py createsuperuser`
11. Run server: `python manage.py runserver`

### PostgreSQL Commands (Windows)
```sql
-- In SQL Shell (psql):
postgress=# CREATE DATABASE mydatabase;
postgress=# CREATE USER myprojectuser WITH PASSWORD 'password';
postgress=# ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
postgress=# ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
postgress=# ALTER ROLE myprojectuser SET timezone TO 'UTC';
postgress=# GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myprojectuser;
postgress=# \q
```

### Accessing Admin Panel
- URL: `http://127.0.0.1:8000/admin`
- Use superuser credentials created with `createsuperuser`

---

## TOPIC 27 — ORACLE DATABASE WITH DJANGO (Windows)

### Requirements
- Oracle Database 11g Express Edition (XE)
- Python 3.6
- `cx_Oracle` package (DB-API 2.0 implementation)
- Oracle Instant Client

### Installation
```bash
pip install cx_Oracle
```

### Add Oracle to PATH
```bash
set PATH=%PATH%;C:\oraclexe\app\oracle\product\11.2.0\server\bin
# OR for Instant Client:
set PATH=%PATH%;C:\python\instantclient
```

### Test Connection
```python
import os
import cx_Oracle

con = cx_Oracle.connect("gktcs", "gktcs", "localhost/xe")
print("Connected!")
con.close()
```

### Django Project Setup for Oracle
```bash
pip install django
django-admin startproject oracledemo
python manage.py startapp blog
```

### Oracle settings.py DATABASES
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.oracle',
        'NAME': 'XE',
        'USER': 'gktcs',
        'PASSWORD': 'gktcs',
        'HOST': 'localhost',
        'PORT': '1521',
    }
}
```

### Oracle Model Example
```python
# blog/models.py
class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        db_table = "posts"
```

### View and URL
```python
# views.py
def blog_posts(request):
    return render(request, 'blog_post.html', {'posts': Post.objects.all()})

# urls.py
urlpatterns = [
    path('post', blog_views.blog_posts)
]
```

### Exam Notes
- Oracle port = **1521**
- `cx_Oracle` = Python Oracle adapter
- `auto_now=True` = updates timestamp every time model is saved
- `auto_now_add=True` = sets timestamp only when object is created

---

## TOPIC 28 — MYSQL DATABASE WITH DJANGO

### Driver
- Use `django.db.backends.mysql` engine
- MySQL default port: **3306**

### settings.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'djangoApp',
        'USER': 'root',
        'PASSWORD': 'mysql',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### Migrate to Apply Changes
```bash
python3 manage.py migrate
```
This creates tables for: admin, auth, contenttypes, sessions

### Migrating a Model to MySQL
```python
# models.py
class Employee(models.Model):
    eid = models.CharField(max_length=20)
    ename = models.CharField(max_length=100)
    econtact = models.CharField(max_length=15)

    class Meta:
        db_table = "employee"
```
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

---

## TOPIC 29 — DJANGO MIDDLEWARE

### Definition
Middleware is a **lightweight plugin** that processes requests during **request and response execution**. It is like a hook into Django's request/response processing.

### Purpose
- Security enforcement
- Session management
- CSRF protection
- Authentication
- Clickjacking protection

### Where Middleware is Configured
In `settings.py` under the `MIDDLEWARE` list.

### Default Middleware in Django
```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

### Middleware Architecture Flow (from PDF)
```
HTTP Request
    ↓
[Middleware 1] process_request()
    ↓
[Middleware 2] process_request()
    ↓
URL Resolver → View
    ↓ (View executes)
[Middleware 2] process_response()
    ↓
[Middleware 1] process_response()
    ↓
HTTP Response to Client
```
- Middleware is processed **top-to-bottom** for requests
- Processed **bottom-to-top** for responses (reverse order)

---

## TOPIC 30 — OLD vs NEW MIDDLEWARE

### Old Middleware (Before Django 1.10)
Used 5 hooks as methods in a class:
1. `process_request()` — before the view
2. `process_view()` — before the view (after URL matching)
3. `process_exception()` — after view throws exception
4. `process_template_response()` — after view returns TemplateResponse
5. `process_response()` — after view

### New Middleware (Django 1.10+)
Any **callable** that takes `get_response` and returns a callable.

**Function-based Middleware:**
```python
def simple_middleware(get_response):
    # One-time configuration and initialization
    def middleware(request):
        # Code BEFORE the view
        response = get_response(request)
        # Code AFTER the view
        return response
    return middleware
```

**Class-based Middleware:**
```python
class SimpleMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration

    def __call__(self, request):
        # Code BEFORE the view
        response = self.get_response(request)
        # Code AFTER the view
        return response
```

### Key Difference
- Old: Class with specific hook methods
- New: Any callable (function or class) with `get_response` argument

---

## TOPIC 31 — CREATING CUSTOM MIDDLEWARE

### Example: OAuth Authentication Middleware
```python
def oauth_authentication_middleware(get_response):
    def middleware(request):
        bearer_token = request.META.get("HTTP_AUTHORIZATION", "")
        if bearer_token.startswith("Bearer"):
            user = get_user_from_token(bearer_token)
            if user:
                request.user = request._cached_user = user
        return get_response(request)
    return middleware
```

### Register in settings.py
```python
MIDDLEWARE = [
    '...',
    'my_app.middleware.oauth_authentication_middleware',
    '...',
]
```

### Custom Class Middleware
```python
class FirstMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response
```

### Exam Notes
- `__init__` is called **once** when server starts
- `__call__` is called **for every request**
- Middleware is added to MIDDLEWARE list with its full Python path
- A Django project can run with an empty MIDDLEWARE list (not recommended)
- Minimum recommended: at least `CommonMiddleware`

---

## TOPIC 32 — OTHER MIDDLEWARE METHODS

### `process_view(request, view_func, view_args, view_kwargs)`
- Takes: HttpRequest object, view function object, list of args, dict of kwargs
- Called just before Django calls the view

### `process_template_response(request, response)`
- Called just after view finished execution
- Used when view returns a TemplateResponse object

### `process_exception(request, exception)`
- Called when view raises an exception
- Takes: HttpRequest object, Exception object raised by view function

---

## TOPIC 33 — COMPLETE ORM WORKFLOW (Step by Step from PDF)

### Step 1: Install Django
```bash
pip install django
```

### Step 2: Create Project
```bash
django-admin startproject myproject
cd myproject
```

### Step 3: Configure Database in settings.py
(See Topic 24 for configurations)

### Step 4: Create App
```bash
python manage.py startapp myapp
```
Add `'myapp'` to `INSTALLED_APPS` in settings.py

### Step 5: Define Model
```python
# myapp/models.py
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    grade = models.CharField(max_length=10)

    def __str__(self):
        return self.name
```

### Step 6: Create and Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 7: Use ORM in Shell
```bash
python manage.py shell
```
```python
from myapp.models import Student

# Create
Student.objects.create(name="Rishika", age=10, grade="5th")

# Read
students = Student.objects.all()
print(students)
```

---

## IMPORTANT COMMANDS CHEAT SHEET

### Project & App Management
```bash
django-admin startproject <project_name>    # Create new project
py manage.py startapp <app_name>            # Create new app
py manage.py runserver                      # Start dev server (port 8000)
py manage.py runserver 8000                 # Start on specific port
```

### Database & Migrations
```bash
py manage.py makemigrations                 # Create migration files
py manage.py makemigrations <app_name>      # For specific app
py manage.py migrate                        # Apply migrations to DB
py manage.py sqlmigrate <app> <number>      # View SQL for migration
py manage.py showmigrations                 # List all migrations & status
```

### Shell & Admin
```bash
py manage.py shell                          # Open Python interactive shell
py manage.py createsuperuser               # Create admin user
py manage.py collectstatic                  # Collect static files
```

### Python/PIP
```bash
python --version                            # Check Python version
pip --version                               # Check PIP version
pip install django                          # Install Django
pip install psycopg2                        # Install PostgreSQL adapter
pip install mysqlclient                     # Install MySQL adapter
pip install cx_Oracle                       # Install Oracle adapter
```

### Virtual Environment
```bash
py -m venv myworld                          # Create virtual env (Windows)
python -m venv myworld                      # Create virtual env (Unix)
myworld\Scripts\activate.bat               # Activate (Windows)
source myworld/bin/activate                 # Activate (Unix)
```

### PostgreSQL Commands
```sql
CREATE DATABASE mydatabase;
CREATE USER myprojectuser WITH PASSWORD '12345';
ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE myprojectuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myprojectuser;
\q    -- Exit PostgreSQL shell
```

---

## MOST IMPORTANT EXAM QUESTIONS

**Q1. What is Django? What are its features?**
Django is a free, open-source Python web framework following MVT pattern. Features: Fast, Fully Loaded, Secure, Scalable, Versatile.

**Q2. What is the difference between MVC and MVT?**
In MVC, the Controller is written by the developer. In Django's MVT, Django itself acts as the Controller. Template in MVT = View in MVC; View in MVT = Controller logic.

**Q3. Explain the MVT architecture with diagram.**
Model (DB Layer) → View (Business Logic) → Template (Presentation). Django handles controller part. Request → urls.py → view → model → template → response.

**Q4. What is Django ORM? How is it different from SQL?**
ORM maps Python classes to database tables. Instead of SQL, use Python objects. Advantage: No need to know SQL, handles cross-database differences.

**Q5. What are Django Migrations? Explain all 4 commands.**
Migrations = version control for DB schema. Commands: `makemigrations` (create migration file), `migrate` (apply to DB), `sqlmigrate` (show SQL), `showmigrations` (list migrations).

**Q6. What is a Virtual Environment and why use it?**
Isolated Python environment for each project. Avoids version conflicts. Created with `venv`. Must be activated before installing packages.

**Q7. What are Model Field Types? List important ones.**
CharField, IntegerField, FloatField, BooleanField, DateField, TextField, EmailField, AutoField.

**Q8. Explain ForeignKey, ManyToManyField, OneToOneField with examples.**
ForeignKey = many-to-one (Car → Manufacturer). ManyToManyField = many-to-many (Pizza ↔ Toppings). OneToOneField = one-to-one (User ↔ Profile).

**Q9. What is Django Middleware? List default middleware.**
Middleware = plugin between request/response. Default: SecurityMiddleware, SessionMiddleware, CsrfViewMiddleware, AuthenticationMiddleware, etc.

**Q10. How do you connect Django with PostgreSQL / MySQL / Oracle?**
Change the ENGINE, NAME, USER, PASSWORD, HOST, PORT in DATABASES dict in settings.py. Install appropriate adapter (psycopg2 / mysqlclient / cx_Oracle).

**Q11. What is the path() function in Django URLs?**
path(route, view, kwargs=None, name=None) — maps a URL pattern to a view function.

**Q12. How do you create a superuser in Django?**
`python manage.py createsuperuser` — prompts for username, email, password.

**Q13. What is the purpose of settings.py in Django?**
Contains all project configuration: database settings, installed apps, middleware, static files, templates, etc.

**Q14. What is the difference between null=True and blank=True?**
`null=True` = database level (stores NULL). `blank=True` = form validation level (allows empty string).

**Q15. Explain the request-response cycle in Django.**
Browser → URL → urls.py → view (views.py) → model (models.py) → template (templates/) → HTML response to browser.

---

## ONE-DAY REVISION NOTES

1. **Django** = Python web framework, MVT pattern, DRY principle, BSD license
2. **MVT** = Model (DB) + View (Business Logic) + Template (UI); Django IS the controller
3. **Install**: `pip install django` inside virtual environment
4. **Start Project**: `django-admin startproject name`
5. **Start App**: `python manage.py startapp appname`; add to `INSTALLED_APPS`
6. **Run Server**: `python manage.py runserver` → `127.0.0.1:8000`
7. **View** = function in views.py that returns HttpResponse or renders template
8. **URL** = path() maps URL to view; `include()` for app-level URLs
9. **Template** = HTML + DTL; `{{ var }}` for variables, `{% tag %}` for logic
10. **Model** = Python class → database table; subclasses `models.Model`
11. **ORM** = Python objects instead of SQL; QuerySet = collection of DB queries
12. **Migration commands**: `makemigrations` → `migrate` → `sqlmigrate` → `showmigrations`
13. **Shell**: `python manage.py shell` → do CRUD manually
14. **CRUD in shell**: `.save()` to insert/update, `.delete()` to remove, `.all().values()` to read
15. **Field Types**: CharField, IntegerField, DateField, BooleanField, TextField, EmailField
16. **Field Options**: null, blank, default, primary_key, unique, max_length
17. **Relationships**: ForeignKey (M-1), ManyToManyField (M-M), OneToOneField (1-1)
18. **Meta class**: inner class for metadata; `ordering`, `db_table`
19. **DB config**: Change ENGINE in DATABASES dict in settings.py
20. **PostgreSQL**: psycopg2 adapter; port 5432; most capable for production
21. **MySQL**: mysqlclient adapter; port 3306
22. **Oracle**: cx_Oracle adapter; port 1521
23. **Middleware** = request/response plugin; configured in MIDDLEWARE list in settings.py
24. **Custom Middleware**: function or class with get_response argument
25. **Middleware hooks**: process_view, process_exception, process_template_response

---

## MEMORY TRICKS / SHORTCUTS

**MVT Roles:**
- **M**odel = **M**anages data (DB)
- **V**iew = **V**erifies business logic
- **T**emplate = **T**ypes out HTML (UI)

**Migration Order (never forget):**
- **M**ake → **M**igrate (makemigrations THEN migrate — alphabetical!)

**Django Installation Order:**
- **P**ython → **V**irtualenv → **D**jango (PVD)

**Relationship Memory:**
- **F**oreignKey = **F**ather has many children (Many children → One father)
- **M**anyToMany = **M**arried couples can have many spouses (complicated!)
- **O**neToOne = **O**ne ring to rule them all (unique match)

**Database Ports:**
- PostgreSQL = **5432** (five-four-three-two, descending)
- MySQL = **3306** (three-three-zero-six)
- Oracle = **1521**

**MVT vs MVC:**
"In MVC you write the C; in MVT Django does it for thee!"

**Field Options:**
- **null** = database NULL
- **blank** = form blank
- Together: `null=True, blank=True` = truly optional field

---

## COMMONLY CONFUSED CONCEPTS

### 1. makemigrations vs migrate
- `makemigrations` = CREATES migration file (detects model changes, writes Python code)
- `migrate` = APPLIES migration file to actual database (runs SQL)
- Analogy: `makemigrations` = writing a recipe; `migrate` = actually cooking it

### 2. null=True vs blank=True
- `null=True` → database level: column can store NULL
- `blank=True` → form validation level: field can be submitted empty
- For CharField: use `blank=True` (not `null=True`), because empty string is preferred over NULL for strings

### 3. MVT View vs MVC View
- MVC View = what the user sees (presentation)
- MVT View = business logic (what the programmer writes in views.py)
- MVT Template = what the user sees (presentation)

### 4. Project vs App in Django
- **Project** = entire Django website (created with `startproject`)
- **App** = specific functionality/module within a project (created with `startapp`)
- One project can have many apps

### 5. ORM QuerySet vs SQL
- SQL: `SELECT * FROM members_member;`
- ORM equivalent: `Member.objects.all()`
- SQL: `SELECT * FROM members_member WHERE id=1;`
- ORM equivalent: `Member.objects.get(id=1)`

### 6. Virtual Environment vs Global Install
- Global install: affects all Python projects on computer
- Virtual environment: isolated per project
- Always use virtual environment for Django projects!

### 7. ForeignKey on_delete options
- `CASCADE` = delete child when parent is deleted
- `SET_NULL` = set child's FK to NULL when parent deleted
- `PROTECT` = prevent deletion of parent if children exist

### 8. Django ORM vs Raw SQL
- ORM: safe (prevents SQL injection automatically), cross-DB compatible, Pythonic
- Raw SQL: faster for complex queries, more control, DB-specific

### 9. process_request vs process_response in Middleware
- `process_request` runs **before** the view
- `process_response` runs **after** the view returns a response

### 10. Auto_now vs auto_now_add
- `auto_now=True` = updates to current datetime **every time object is saved**
- `auto_now_add=True` = sets to current datetime **only when object is first created**

---

## FINAL CHECK

✅ Django Introduction & Definition  
✅ How Django Works (MVT)  
✅ Django History & Versions  
✅ Features of Django  
✅ MVT Design Pattern (with diagram explanation)  
✅ Django Installation (Windows & Unix)  
✅ Virtual Environment Setup  
✅ Creating Django Project (startproject)  
✅ Django Project File Structure  
✅ Running Development Server  
✅ Creating Django App (startapp)  
✅ Django Views  
✅ Django URLs & path() function  
✅ Django Templates  
✅ Django Models  
✅ SQLite Default Database  
✅ Django ORM (with diagram)  
✅ Model Field Types  
✅ Model Field Options  
✅ Model Relationships (FK, M2M, O2O)  
✅ Meta Class  
✅ Choices Field  
✅ Migrations (all 4 commands)  
✅ Migration Files Structure  
✅ CRUD via Django Shell  
✅ Update Model (Adding Fields)  
✅ Database Configuration (SQLite, PostgreSQL, MySQL, Oracle)  
✅ PostgreSQL Setup on Ubuntu  
✅ PostgreSQL Setup on Windows  
✅ Oracle Database Setup (Windows)  
✅ MySQL Database Setup  
✅ Django Middleware (Definition, Purpose)  
✅ Default Middleware List  
✅ Old Middleware (pre-1.10) vs New Middleware  
✅ Creating Custom Middleware (function-based & class-based)  
✅ Activating Middleware  
✅ Middleware Methods (process_view, process_exception, process_template_response)  
✅ Django Project Layout Diagram  
✅ Complete ORM Workflow (7 Steps)  
✅ Commands Cheat Sheet  

**All detected topics and subtopics from the PDF have been covered.**
