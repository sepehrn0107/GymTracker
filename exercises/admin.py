# from django.contrib import admin
# from .models import Exercise
# from .forms import ExerciseForm, CustomAddExerciseform

# class ExerciseAdmin(admin.ModelAdmin):
#     form = ExerciseForm 
#     add_form = CustomAddExerciseform
#     def get_form(self, request, obj=None, **kwargs):
#         defaults = {}
#         if obj is None:
#             defaults['form'] = self.add_form
#         defaults.update(kwargs)
#         return super().get_form(request, obj, **defaults)

# admin.site.register(Exercise, ExerciseForm)
# Register your models here.
