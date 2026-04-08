from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, EmailField
from wtforms.validators import DataRequired, Email, Length

class StudentForm(FlaskForm):
    name = StringField("Name", validators=[
        DataRequired(message="Name is required"),
        Length(min=2, max=100)
    ])
    email = EmailField("Email", validators=[
        DataRequired(message="Email is required"),
        Email(message="Enter a valid email")
    ])
    course = StringField("Course", validators=[
        DataRequired(message="Course is required"),
        Length(min=2, max=100)
    ])
    submit = SubmitField("Submit")