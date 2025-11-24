import React, { useState } from 'react';
import * as d from './DAO_API';

export const FormRegistrar = () => {

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [año, setAño] = useState("");
    const [color, setColor] = useState("");
    const [placa, setPlaca] = useState("");
    const [tipo, setTipo] = useState("");
    const [kilometraje, setKilometraje] = useState("");
    const [disponible, setDisponible] = useState(null);
    const [precio, setPrecio] = useState("");
    const [fechaIngreso, setFechaIngreso] = useState(null);

    const botonGuardar = async (e) => {
        try {
            //--- Para evitar que la página se recargue ---

            // Genera el objeto en formato JSON, con los datos del formulario.
            var miObjeto = { marca, modelo, año, color, placa, tipo, kilometraje, disponible, precio, fecha_ingreso }

            const res = await d.registrarVehiculo(miObjeto);

            // Limpia el contenido de las variables de estado.
            setMarca("");
            setModelo("");
            setAño("");
            setColor("");
            setPlaca("");
            setTipo("");
            setKilometraje("");
            setDisponible(null);
            setPrecio("");
            setFechaIngreso(null);

            // Mensaje de acción correcta.
            const msg = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <h4>Vehiculo (${marca}) registrado correctamente.</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
            document.getElementById("mensajes").innerHTML = msg;

            // Limpia los campos del formulario.
            document.getElementById("miFormulario").reset();

        } catch (err) {
            console.log("ERROR : " + err);
        }

    } // Cierra la función "botonGuardar".



    return (
        <div className="container mt-3  pt-3  pb-3" style={{ backgroundColor: "lightgray" }}>

            <div id="mensajes" className="pt-2   pb-2"></div>

            <h1 className="text-center">Formulario de Registro de Vehiculos</h1>
            <center>
                <form id="miFormulario" method="POST" onSubmit={botonGuardar} className="col-9" >
                    <div className="mb-3">
                        <select onChange={(e) => setMarca(e.target.value)} id="cbomar" name="cbomar" className="form-select" required>
                            <option value="">Seleccione una Marca del Vehiculo</option>
                            <option value="TOYOTA">TOYOTA</option>
                            <option value="FORD">FORD</option>
                            <option value="CHEVROLET">CHEVROLET</option>
                            <option value="SUSUKI">SUSUKI</option>
                            <option value="MITSUBISHI">MITSUBISHI</option>
                            <option value="AUDI">AUDI</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setModelo(e.target.value)} id="txtmod" className="form-control" placeholder="Digite el modelo del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <input type="number" onChange={(e) => setAño(e.target.value)} id="txtaño" className="form-control" placeholder="Digite el año del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setColor(e.target.value)} id="txtcolor" className="form-control" placeholder="Digite el color del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setPlaca(e.target.value)} id="txtplaca" className="form-control" placeholder="Digite la placa del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setTipo(e.target.value)} id="txtpre" className="form-control" placeholder="Digite el tipo del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <input type="number" onChange={(e) => setKilometraje(e.target.value)} id="txtkil" className="form-control" placeholder="Digite el kilometraje del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <h7 className="mb-3">Elija la disponibilidad</h7>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="op1"
                                id="op1"
                                checked={disponible === true}
                                onChange={() => setDisponible(true)}
                            />
                            <label className="form-check-label" for="op1">
                                Sí
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="op2"
                                id="op2"
                                checked={disponible === false}
                                onChange={() => setDisponible(false)}
                            />
                            <label className="form-check-label" for="op2">
                                No
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="number" onChange={(e) => setPrecio(e.target.value)} id="txtmod" className="form-control" placeholder="Digite el precio del vehiculo..." required />
                    </div>
                    <div className="mb-3">
                        <input type="date" onChange={(e) => setFechaIngreso(e.target.value)} id="txtfec" className="form-control" placeholder="Digite la fecha de ingreso del vehiculo..." required />
                    </div>
                    <button className="btn btn-dark btn-lg" type='submit'>Registrar vehiculo</button>
                </form>
            </center>
        </div>
    )
}
