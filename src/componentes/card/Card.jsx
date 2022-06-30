import React from 'react'
import { useModal } from '../../hooks/useModal'
import imagenCalendario from "../../imagenes/calendario.png"
import Modal from '../modal/Modal'
import CardModule from "./Card.module.css"

const Card = ({el}) => {
    let [
        isOpen,
        openModal, 
        closeModal
     ] = useModal()
    const cortarTexto = (cadena) => cadena.length < 245 ? cadena : cadena.substr(0, 230) + "...";
  return (
    <>
        <div className={CardModule.divPrincipal} >
            {
                Boolean(el.backdrop_path) === false
                ? <div className={CardModule.divSinImagen}  onClick={openModal}><p>No existe la imagen</p> </div>
                : <img src={`https://image.tmdb.org/t/p/w300/${el.backdrop_path}`} alt="Imagen de la pelicula" onClick={openModal} className={CardModule.imagenPelicula}/>
            }
            <div className={CardModule.divPelicula}>
                <p className={CardModule.title}>{el.original_title}</p>
                <div className={CardModule.divDatosPeli}>
                    <div className={CardModule.divFecha}>
                        <img src={imagenCalendario} alt="Imagen del calendario" />
                        <p>{el.release_date}</p> 
                    </div>
                    <p className={CardModule.dataPeli}>{cortarTexto(el.overview)}</p>
                </div>
            </div>
        </div>
        <Modal el={el} isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Card