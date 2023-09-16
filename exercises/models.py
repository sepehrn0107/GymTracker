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
    name = models.TextField(max_length=60, default="")
    about = models.TextField(default='')
    class Bodyparts(models.TextChoices):
        CHEST = 'CH', 'Chest'
        LOWER_BACK = 'LB', 'Lowerback'
        UPPER_BACK = 'UB', 'Upperback'
        LEGS = 'LE', 'Legs'
        CORE = 'C', 'Core'
        ARMS = 'AR', 'Arms'
        SHOULDER = 'SH', 'Shoulder'
        CONDITION = 'CO', 'Condition'
    body_part = models.CharField(
        max_length = 2,
        choices = Bodyparts.choices,
        default = Bodyparts.CHEST
    )
    class UserGear(models.TextChoices):
        BARBELL = 'BB', 'Barbell'
        BAR = 'BA', 'Bar'
        DISC = 'DS', 'DISC'
        BODYWEIGHT = 'BW', 'Bodyweight'
        CABLE = 'CB', 'Cable'
        NONN = 'NN', 'None'
    user_gear = models.CharField(
        max_length = 2,
        choices = UserGear.choices,
        default = UserGear.NONN
    )
    def _str_(self):
        return self.name



# Create your models here.
