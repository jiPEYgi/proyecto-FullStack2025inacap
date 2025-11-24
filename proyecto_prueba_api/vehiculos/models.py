from django.db import models

class Vehiculo(models.Model):
    marca         = models.CharField(max_length=50)
    modelo        = models.CharField(max_length=50)
    año           = models.IntegerField()
    color         = models.CharField(max_length=15)
    placa         = models.CharField(max_length=15)
    tipo          = models.CharField(max_length=25)
    kilometraje   = models.IntegerField()
    disponible    = models.BooleanField()
    precio        = models.IntegerField()
    fecha_ingreso = models.DateField()
    