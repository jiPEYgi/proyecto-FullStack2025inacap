from django.core.management.base import BaseCommand
from vehiculos.models import Vehiculo

class Command(BaseCommand):
    def handle(self, *args, **options):
        lista_veh = [
            Vehiculo(marca="Suzuki", modelo="Swift", año="2016", color="Plateado", placa="YG-HT-32", tipo="Compact", kilometraje="7000", disponible=True, precio=3000000, fecha_ingreso='2024-11-09'),
            Vehiculo(marca="Toyota", modelo="Corolla", año="1985", color="Bordo", placa="GL-HF-45", tipo="Hatchback", kilometraje="4000", disponible=False, precio=2000000, fecha_ingreso='2016-05-20'),
        ]
        Vehiculo.objects.bulk_create(lista_veh)
        self.stdout.write('Vehiculos insertados correctamente.')