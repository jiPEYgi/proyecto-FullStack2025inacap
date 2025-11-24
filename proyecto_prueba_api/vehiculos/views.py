from django.shortcuts import render
from django.http import JsonResponse

from vehiculos.models import Vehiculo
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from vehiculos.serializers import VehiculoSerializer

def obtenerVehiculos(request):
    veh = Vehiculo.objects.all()
    datos = { "veh" : list(veh.values('marca', 'modelo', 'año', 'color', 'placa', 'tipo', 'kilometraje', 'disponible', 'precio', 'fecha_ingreso')) }
    return JsonResponse(datos)

@api_view(['GET', 'POST'])
def vehiculos_list(request):
    if request.method == 'GET':
        veh = Vehiculo.objects.all()
        ser = VehiculoSerializer(veh, many=True)
        return Response(ser.data)
    
    if request.method == 'POST':
        ser = VehiculoSerializer(data = request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        else:
            return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def vehiculos_detail(request, id):
    try:
        veh = Vehiculo.objects.get(id=id)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'GET':
        ser = VehiculoSerializer(veh)
        return Response(ser.data)
    
    if request.method == 'PUT':
        ser = VehiculoSerializer(veh, data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        else:
            return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
        
    if request.method == 'DELETE':
        veh.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
