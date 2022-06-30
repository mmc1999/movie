import React from 'react'
import HeaderModule from "./Header.module.css"
import imagenIconoPelicula from "../../imagenes/logo.png"

const Header = ({children}) => {
  return (
    <header>
        <section className={HeaderModule.primerSection}>
            <div>
                <p className={HeaderModule.logo}>
                    Logo
                </p> 
            </div>
            <div className={HeaderModule.divMovie}>
                <img src={imagenIconoPelicula} alt="Imagen del icono de una pelicula" className={HeaderModule.imagenIconoPelicula} />
                <p className={HeaderModule.primerSectionDivP}>MOVIE</p> 
            </div>
            <div className={HeaderModule.divFree}>
                <p className={HeaderModule.primerSectionDivP}>start your free trial</p> 
            </div>
        </section>
        <section>
            {children}
        </section>
    </header>
  )
}

export default Header