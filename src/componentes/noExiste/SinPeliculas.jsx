import React from 'react'

const SinPeliculas = ({search}) => {
  return (
    <div>
      {
        search.length === 0
        ? <p>No existe pelicula en catalogo</p>
        : <p>No hay peliculas en catalogo con el nombre "{search}"</p>
      }
        
    </div>
  )
}

export default SinPeliculas