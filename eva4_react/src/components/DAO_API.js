
export const obtenerVehiculos = async () => {
    const res = await fetch('http://127.0.0.1:8000/vehiculos/');
    if (!res.ok) throw new Error("Error al listar vehiculos.");
    return await res.json();
}





export const eliminarVehiculo = async (idEliminar) => {
    const url = "http://127.0.0.1:8000/vehiculos/"+idEliminar;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const msg =`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h4>Vehiculo (${ idEliminar }) eliminado correctamente.</h4>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        return msg;
    } else {
        const msg =`
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <h4>Error al eliminar vehiculo: (${ response.status }) : ${ response.statusTexts } !</h4>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        return msg;
    }
}





export const registrarVehiculo = async (vehiculo) => {
    
    const url = "http://127.0.0.1:8000/vehiculos/";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "marca" : String(vehiculo.marca),
            "modelo" : String(vehiculo.modelo),
            "año" : parseInt(vehiculo.año),
            "color" : String(vehiculo.color),
            "placa" : String(vehiculo.placa),
            "tipo" : String(vehiculo.tipo),
            "kilometraje" : parseInt(vehiculo.kilometraje),
            "disponible" : Boolean(vehiculo.disponible),
            "precio" : parseInt(vehiculo.precio),
            "fecha_ingreso" : Date(vehiculo.fecha_ingreso)
        })
    });
    
    //return await response.json();

}
