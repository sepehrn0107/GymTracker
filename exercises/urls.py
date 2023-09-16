from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('exercises', views.exercise_view, name="exercise_view" )
]