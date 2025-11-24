from django.contrib import admin

from vehiculos.models import Vehiculo

class VehiculoAdmin(admin.ModelAdmin):
    list_display = ["marca", "modelo", "año", "color", "placa", "tipo", "kilometraje", "disponible", "precio", "fecha_ingreso"]
    
admin.site.register(Vehiculo, VehiculoAdmin)