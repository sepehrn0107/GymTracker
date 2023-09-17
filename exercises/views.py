from rest_framework import generics
from .models import Exercise
from .serializers import ExerciseSerializer

# ListCreateAPIView cread read/write endpoint that lists all exercise instances
class ExerciseList(generics.ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

# ListCreateAPIView cread read/write/delete endpoint for individual exercises
class ExerciseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

