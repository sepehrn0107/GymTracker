from django.forms import ModelForm
from .models import Exercise


class ExerciseForm(ModelForm):
    
    class Meta:
        model = Exercise
        fields = ['name', 'about', 'body_part', 'user_gear']
