import React from 'react'
import Card from '../card/Card'
import Loader from '../loader/Loader'
import SinPeliculas from '../noExiste/SinPeliculas'
import MainModule from "./Main.module.css"

const Main = ({data, search, loading}) => {
  return (
    <main className={MainModule.main}>
        <h1 className={MainModule.titulo}>Popular movies</h1>
        {loading && <Loader />}
        <div className={MainModule.divCard}>
        {
            data.length !== 0
            ? data.map(el => 
              <Card key={el.id} el={el} />
            )
            : !loading && <SinPeliculas search={search} />
        }  
        </div>
        
    </main>
  )
}

export default Main