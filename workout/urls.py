from django.urls import path

from .views import WorkoutApiView, ExerciseSetApiview, WorkoutExerciseApiview

urlpatterns = [
    # TODO
    # create custom url, so one can find exercisesets from one workout, exercises from one workout etc.
    path("workout", WorkoutApiView.as_view()),  # all workouts
    path("exerciseSet", ExerciseSetApiview.as_view()),  # all ExerciseSets
    path(
        "exercise-in-workout", WorkoutExerciseApiview.as_view()
    ),  # all WorkoutExerciseApiview
]
