from django.db import models

# Create your models here.
class Todo(models.Model):
    detail = models.TextField(blank = True, null = True)

    