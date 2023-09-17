from django.urls import re_path
from django.urls import include

urlpatterns = [re_path(r"^rest-auth/", include("exarth_rest_auth.urls"))]
