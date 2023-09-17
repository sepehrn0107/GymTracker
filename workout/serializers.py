from rest_framework import serializers
from workout.models import Workout, WorkoutExercise, ExerciseSet


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = "__all__"


class WorkoutExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutExercise
        fields = ("workout", "exercise")


class ExerciseSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseSet
        fields = (
            "workout_exercise",
            "set_number",
            "weight",
            "repetitions",
            "rpe",
            "set_type",
        )
