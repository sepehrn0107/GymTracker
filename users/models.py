from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email  = models.EmailField(_("email Address"), unique=True)
    name = models.TextField(default = '')
    date_of_birth = models.DateField(default = '1900-01-01')
    FEMALE = "F"
    MALE = "M"
    NONN = "N"

    GENDER_CHOICES = [
    (FEMALE , 'Female'),
    (MALE , 'Male'),
    (NONN , 'None')
    ]
    gender = models.CharField(
        max_length=2,
        choices=GENDER_CHOICES,
        default=NONN
    )
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    def _str_(self):
        return self.email