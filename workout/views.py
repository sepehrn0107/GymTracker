from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Workout, WorkoutExercise, ExerciseSet
from .serializers import (
    WorkoutSerializer,
    WorkoutExerciseSerializer,
    ExerciseSetSerializer,
)


class WorkoutApiView(APIView):
    # get all workouts. TODO need to be for correct user
    def get(self, request, *args, **kwargs):
        workouts = Workout.objects.all()
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            "title": request.data.get("title"),
            "note": request.data.get("note"),
            "start_date": request.data.get("start_date"),
            "end_date": request.data.get("end_date"),
            "exercises": request.data.get("exercises"),
        }
        serializer = WorkoutSerializer(data=data)
        if serializer.is_valid():
            serializer.save(request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# WorkoutExercise
class WorkoutExerciseApiview(APIView):
    def get(self, request, *args):
        workout_exercises = WorkoutExercise.objects.all()
        serializer = WorkoutExerciseSerializer(workout_exercises, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            "workout": request.data.get("workout"),
            "exercise": request.data.get("exercise"),
        }
        serializer = WorkoutExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save(request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ExerciseSet
class ExerciseSetApiview(APIView):
    def get(self, request, *args):
        exercisesets = ExerciseSet.objects.all()
        serializer = ExerciseSetSerializer(exercisesets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            "workout_exercise": request.data.get("workout_exercise"),
            "set_number": request.data.get("set_number"),
            "weight": request.data.get("weight"),
            "repetitions": request.data.get("repetitions"),
            "rpe": request.data.get("rpe"),
            "set_type": request.data.get("set_type"),
        }
        serializer = ExerciseSetSerializer(data=data)
        if serializer.is_valid():
            serializer.save(request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
