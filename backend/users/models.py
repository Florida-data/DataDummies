from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import customUserManager
# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(_("Nombre de Usuario"), max_length=20)
    email = models.EmailField(_("Email"), max_length=254, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = customUserManager()
    
    class Meta:
        verbose_name = _("Usuario")
        verbose_name_plural = _("Usuarios")
        
    def __str__(self):
        return self.email

    
    

