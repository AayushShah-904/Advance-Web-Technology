from flask import Blueprint, render_template, redirect, url_for, flash
from app.extensions import db
from app.models import Student
from app.forms import StudentForm

main = Blueprint("main", __name__)

@main.route("/")
def index():
    students = Student.query.all()
    return render_template("index.html", students=students)

@main.route("/create", methods=["GET", "POST"])
def create():
    form = StudentForm()
    if form.validate_on_submit():
        student = Student(
            name=form.name.data,
            email=form.email.data,
            course=form.course.data
        )
        db.session.add(student)
        db.session.commit()
        flash("Student added successfully!", "success")
        return redirect(url_for("main.index"))
    return render_template("create.html", form=form)

@main.route("/edit/<int:id>", methods=["GET", "POST"])
def edit(id):
    student = Student.query.get_or_404(id)
    form = StudentForm(obj=student)

    if form.validate_on_submit():
        student.name = form.name.data
        student.email = form.email.data
        student.course = form.course.data
        db.session.commit()
        flash("Student updated successfully!", "info")
        return redirect(url_for("main.index"))

    return render_template("edit.html", form=form, student=student)

@main.route("/delete/<int:id>", methods=["POST"])
def delete(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    flash("Student deleted successfully!", "danger")
    return redirect(url_for("main.index"))