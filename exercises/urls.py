from django.contrib import admin
from django.urls import path

from exercises import views

urlpatterns = [
    path('exercises/', views.ExerciseList.as_view()),
    path('exercises/<int:pk>/', views.ExerciseDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)