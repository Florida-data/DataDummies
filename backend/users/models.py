from django.conf import settings
from  django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Usuarios deben tener un email")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save()
        return user
class User (AbstractBaseUser, PermissionsMixin):
    email = models.EmailField( max_length=254, unique=True)
    name = models.CharField( max_length=50, default='JohnDoe')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects =  UserAccountManager()
    
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS = ['name']
    
    def get_full_name(self):
        return self.name
    def get_short_name(self):
        return self.name
    def __str__(self):
        return self.email
from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='projects')

    def __str__(self):
        return self.name

class Folder(models.Model):
    name = models.CharField(max_length=255)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='folders')
    parent_folder = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='subfolders')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Document(models.Model):
    name = models.CharField(max_length=255)
    content = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='documents')
    folder = models.ForeignKey(Folder, on_delete=models.CASCADE, null=True, blank=True, related_name='documents')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Page(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE, related_name='pages')
    content = models.TextField()
    page_number = models.PositiveIntegerField()

    class Meta:
        unique_together = ['document', 'page_number']

    def __str__(self):
        return f"{self.document.name} - Page {self.page_number}"

class Image(models.Model):
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='document_images/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Image in {self.page}"

class DataSet(models.Model):
    name = models.CharField(max_length=255)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='datasets')
    file = models.FileField(upload_to='datasets/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Data(models.Model):
    dataset = models.ForeignKey(DataSet, on_delete=models.CASCADE, related_name='data')
    key = models.CharField(max_length=255)
    value = models.FloatField()
    timestamp = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.key}: {self.value}"

class Chart(models.Model):
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='charts')
    chart_type = models.CharField(max_length=20)
    dataset = models.ForeignKey(DataSet, on_delete=models.CASCADE, related_name='charts')
    configuration = models.JSONField()  # Almacena laconfi del grafikeishon en formato JSON

    def __str__(self):
        return f"{self.get_chart_type_display()} in {self.page}"