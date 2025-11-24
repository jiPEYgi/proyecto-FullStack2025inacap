import { useState } from 'react'
import './App.css'
import { FormRegistrar } from './components/FormRegistrar';
import { ListarVehiculos } from './components/ListarVehiculos';
import { Menu } from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact path="/formulario" element={ <FormRegistrar/> }/>
          <Route exact path="/listado"    element={ <ListarVehiculos/> }/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App