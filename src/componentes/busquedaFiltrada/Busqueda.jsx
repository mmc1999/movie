import React from 'react'
import imagenes from "../../imagenes/star.png"
import BusquedaModule from "./Busqueda.module.css"
import iconoLupa from "../../imagenes/lupa.png"

const Busqueda = ({handleChange, search,handleSubmit, handleClick, numCheck}) => {
  return (
    <form className={BusquedaModule.form} onSubmit={handleSubmit}>
      <div>
        <button type='submit' className={BusquedaModule.boton}>
          <img src={iconoLupa} alt="Icono de la lupa" className={BusquedaModule.iconoLupa}/>
        </button>
        <input type="text" className={BusquedaModule.input} placeholder="Search movie" value={search} onChange={handleChange}/>
      </div> 
      <div className={BusquedaModule.divRaiting}>
        <p className={BusquedaModule.raiting}>Raiting:</p>
        <div className={BusquedaModule.divStars}>
          <label>
            <input type="checkbox" value="1" onChange={handleClick} checked={numCheck >= 1 }/>
            <img 
              src={imagenes} 
              alt='icono de una estrella' 
              className={BusquedaModule.imagenEstrella} 
            />
          </label>
          <label>
            <input type="checkbox" value="2" onChange={handleClick} checked={numCheck >= 2 }/>
            <img 
              src={imagenes} 
              alt='icono de una estrella' 
              className={BusquedaModule.imagenEstrella} 
            />
          </label>
          <label>
            <input type="checkbox" value="3" onChange={handleClick} checked={numCheck >= 3 }/>
            <img 
              src={imagenes} 
              alt='icono de una estrella' 
              className={BusquedaModule.imagenEstrella} 
            />
          </label>
          <label>
            <input type="checkbox" value="4" onChange={handleClick} checked={numCheck >= 4 }/>
            <img 
              src={imagenes} 
              alt='icono de una estrella' 
              className={BusquedaModule.imagenEstrella} 
            />
          </label>
          <label>
            <input type="checkbox" value="5" onChange={handleClick} checked={numCheck >= 5 }/>
            <img 
              src={imagenes} 
              alt='icono de una estrella' 
              className={BusquedaModule.imagenEstrella} 
            />
          </label>
        </div>
      </div>
    </form>
  )
}

export default Busqueda