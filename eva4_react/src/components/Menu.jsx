import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <div>

        <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'lightgray'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <h2>REACT + DJANGO REST</h2>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                        <h3><NavLink className="nav-link" to="/formulario"><strong>Formulario</strong></NavLink></h3>
                        <h3><NavLink className="nav-link" to="/listado"><strong>Listado</strong></NavLink></h3>
                    </div>
                </div>
            </div>
        </nav>

    </div>
  )
}
