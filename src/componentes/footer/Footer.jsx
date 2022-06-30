import React from 'react'
import FooterModule from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={FooterModule.footer}>
        <div>
            <p className={FooterModule.parrafo}>LOGO</p>
        </div>
        <div className={FooterModule.divParrafo}>
            <button href='#' className={FooterModule.botonEnlace}>Home</button>
            <button href='#' className={FooterModule.botonEnlace}>Terms of Use</button>
            <button href='#' className={FooterModule.botonEnlace}>Help</button>
            <button href='#' className={FooterModule.botonEnlace}>Manage account</button>
        </div>
        <div>
            <p className={FooterModule.parrafo}>Copyright 2020. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer