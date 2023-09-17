from datetime import timezone
from django.db import models

from exercises.models import Exercise


class Workout(models.Model):
    owner = models.ForeignKey("User", default=1, on_delete=models.DO_NOTHING)
    title = models.TextField(default="", max_length=30)
    note = models.TextField(default="", max_length=200)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(blank=True)
    exercises = models.ManyToManyField(Exercise, through="WorkoutExercise")

    def __str__(self):
        return self.title


class WorkoutExercise(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.DO_NOTHING)
    exercise = models.ForeignKey(Exercise, on_delete=models.DO_NOTHING)
    sets = models.ManyToManyField("ExerciseSet")

    def __str__(self):
        return f"Workout: {self.workout.title}, Exercise: {self.exercise.name}"


class ExerciseSet(models.Model):
    workout_exercise = (
        models.ForeignKey(WorkoutExercise, on_delete=models.DO_NOTHING),
    )
    set_number = models.PositiveIntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    repetitions = models.PositiveIntegerField()
    rpe = models.DecimalField(max_digits=2, decimal_places=1)
    set_type = models.CharField(max_length=10, choices=[("Warmup", "Working")])

    def __str__(self):
        return f"Set {self.set_number} - Exercise: {self.workout_exercise.exercise.name}, Workout: {self.workout_exercise.workout.title}"


# Create your models here.
