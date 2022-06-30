import { useEffect, useState } from "react";

const useFiltrarBusqueda = (data) => {
    const [datos, setDatos] = useState([]);
    const [numCheck, setNumCheck] = useState(0);

    useEffect(() => {
      setDatos(data)
    }, []);

    
    const filtrarDatos = (data, valor) => {
      setNumCheck(parseInt(valor) === numCheck ? 0 : parseInt(valor));
      if(parseInt(valor) === numCheck) return setDatos(data)
      switch (valor) {
        case "1":
          const result1 = data.filter(el => el.vote_average > 0 && el.vote_average < 2);
          setDatos(result1)
          break;
        case "2":
          const result2 = data.filter(el => el.vote_average > 2 && el.vote_average < 4);
          setDatos(result2)
          break;
        case "3":
          const result3 = data.filter(el => el.vote_average > 4 && el.vote_average < 6);
          setDatos(result3)
          break;
        case "4":
          const result4 = data.filter(el => el.vote_average > 6 && el.vote_average < 8);
          setDatos(result4)
          break;
        case "5":
          const result5 = data.filter(el => el.vote_average > 8 && el.vote_average < 10);
          setDatos(result5)
          break;
        default:
          break;
      }
    }
    const handleClick = (valor) => filtrarDatos(data, valor.target.value);
  
  return {
    handleClick,
    numCheck,
    datos
  }
}

export default useFiltrarBusqueda