from django.shortcuts import render
from .forms import ExerciseForm
def exercise_view(request):
    if request.method == "POST":
        form = ExerciseForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse('<p>Exercise Saved</p>')
        else:
            return HttpResponse('<p>Invalid Input</p>')
    else:
        form = ExerciseForm
        context = {
            'form': form,
        }
    return render(request, "exercises.html", context)

# Create your views here.
