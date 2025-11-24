import React, { useEffect, useState } from 'react';

import * as d from './DAO_API';

export const ListarVehiculos = () => {

  const [vehiculos, setVehiculos] = useState([]);



  const listarVehiculos = async () => {
      const res = await d.obtenerVehiculos();
      setVehiculos(res);
  }


  
  useEffect(() => {
    listarVehiculos()
  }, []);



  const botonEliminar = async (idEliminar) => {
    if(window.confirm("¿Está seguro(a) de querer eliminar el registro ("+idEliminar+")?")){
      const msg = await d.eliminarVehiculo(idEliminar);
      document.getElementById("mensajes").innerHTML = msg;
      listarVehiculos();
    }
    console.clear();
  }



  return (
    <div className="container  mt-3  pb-3"  style={{ backgroundColor:"lightgray"}}>

      <div id="mensajes" className="pt-2   pb-2"></div>

      <h1 className="text-center">Listado de Vehiculos</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>MARCA</th>
            <th>MODELO</th>
            <th>AÑO</th>
            <th>COLOR</th>
            <th>PLACA</th>
            <th>TIPO</th>
            <th>KILOMETRAJE</th>
            <th>DISPONIBLE</th>
            <th>PRECIO</th>
            <th>FECHA INGRESO</th>
            <th>ELIMIMAR</th>
          </tr>
        </thead>
        <tbody>

          { vehiculos.map((x) => (
            
            <tr className="text-center" key={ x.id }>
              <td>{ x.id }</td>
              <td>{ x.marca }</td>
              <td>{ x.modelo }</td>
              <td>{ x.año }</td>
              <td>{ x.color }</td>
              <td>{ x.placa }</td>
              <td>{ x.tipo }</td>
              <td>{ x.kilometraje }</td>
              <td>{ x.disponible }</td>
              <td>{ x.precio }</td>
              <td>{ x.fecha_ingreso }</td>
              <td>
                <button className="btn btn-outline-dark"  onClick={ () => botonEliminar(x.id) }>
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>

          )) }

        </tbody>
      </table>

    </div>
  )
}
