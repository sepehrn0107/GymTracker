from django.db import models

# BODY_PART_CHOISES = [
#     (CHEST, 'Chest'),
#     (LOWER_BACK,'Lowerback'),
#     (UPPER_BACK, 'Upperback'),
#     (LEGS, 'Legs'),
#     (CORE, 'Core'),
#     (ARMS, 'Arms')
# ]

class Exercise(models.Model):
    name = models.TextField()
    about = models.TextField(default='')
    class Bodyparts(models.TextChoices):
        CHEST = 'CH', 'Chest'
        LOWER_BACK = 'LB' 'Lowerback'
        UPPER_BACK = 'UB' 'Upperback'
        LEGS = 'LE' 'Legs'
        CORE = 'C' 'Core'
        ARMS = 'AR' 'Arms'
        SHOULDER = 'SH' 'Shoulder'
        CONDITION = 'CO' 'Condition'
    bodypart = models.CharField(
        max_length = 11,
        choices = Bodyparts.choices,
        default = Bodyparts.CHEST
    )
    def _str_(self):
        return self.name



# Create your models here.
