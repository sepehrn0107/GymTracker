from django import forms
from .models import Exercise


class ExerciseForm(forms.Form):

    class Meta:
        model = Exercise
        fields = ['name', 'about', 'body_part', 'user_gear']
