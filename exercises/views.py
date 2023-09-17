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




















# from django.shortcuts import HttpResponse, render

# from .forms import ExerciseForm


# def exercise_view(request):
#     if request.method == "POST":
#         form = ExerciseForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return HttpResponse('<p>Exercise Saved</p>')
#         else:
#             return HttpResponse('<p>Invalid Input</p>')
#     else:
#         form = ExerciseForm
#         context = {
#             'form': form,
#         }
#     return render(request, "exercises.html", context)

# # Create your views here.
