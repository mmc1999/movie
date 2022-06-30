import './App.css';
import Busqueda from "./componentes/busquedaFiltrada/Busqueda";
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import useApifetch from './hooks/useApifetch';
import useFiltrarBusqueda from './hooks/useFiltrarBusqueda';
import Main from './componentes/main/Main';

function App() {
  let {
    data,
    handleChange,
    search,
    handleSubmit,
    loading
  } = useApifetch();
  let {
    handleClick,
    numCheck,
    datos
  } = useFiltrarBusqueda(data)
  return (
    <>
      <Header>
        <Busqueda
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          search={search} 
          handleClick={handleClick}
          numCheck={numCheck}
        />
      </Header>
      <Main data={numCheck === 0 ? data : datos} search={search} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
