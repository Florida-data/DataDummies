from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

class customUserManager(BaseUserManager):
    
        
    def create_user(self, username, email, password, confirmPassword):
        if not username:
            raise ValueError(_("Debes ingresar un nombre de usuario"))
        if not email:
            raise ValueError(_("Debes ingresar un email"))
        else:
            email = self.normalize_email(email)
            self.email_validator(email)
        if not password:
            raise ValueError(_("Debes ingresar una contraseña"))
        if not confirmPassword:
            raise ValueError(_("Debes de confirmar la contraseña"))
        if not confirmPassword == password:
            raise ValueError(_("La contraseña y la confirmacion no coinciden"))
        user = self.model(
            username = username,
            password = password,
            email = email,
            confirmPassword = confirmPassword,
            
        )
        user.set_password(password)
        user.save()
        return user
        