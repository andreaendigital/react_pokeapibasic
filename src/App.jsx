// Importando funciones y componentes necesarios
import { useState } from "react";
import "./App.css";
import { MiApi } from "./components/MiApi";
import Footer from "./components/Footer";
import { Cards } from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";

function App( ) {
  // con useState creo dos estados locales:
  const [busqueda, setBusqueda] = useState("");
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=100"
  );

  // UseFetch es un custom hook que maneja la lógica de realizar una solicitud HTTP
  //con fetch y devuelve el estado de carga "cargando" y la "data" obtenida de la api
  const fetchState = MiApi(url);
  const { cargando, data, error } = fetchState;

  cargando ? console.log("cargando") : console.log(data.results);

  const handleSearchChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <img
          src="https://pngimg.com/uploads/pokemon/pokemon_PNG98.png"
       className="imagen"
          alt="Imagen de Pokemons"
        />
       </div>
      <div>
        <h1 className="mb-3">¡Atrapa a tu pokemon! </h1>

        <h3>Ingresa el nombre del pokemon que buscas:</h3>
        <input
          className="m-3 mb-4"
          type="text"
          value={busqueda}
          onChange={handleSearchChange}
        />

        {error && <p>Error: {error.message}</p>}
        {/* Condicional Terciario: 
Si Cargando es verdadero -> Muestra el mensaje de carga si los datos se demoran en cargar desde la API  
Si Cargando es falso -> Muestra el componente Cards pasando "busqueda" (el termino de busqueda del usuario) 
y "results" (la lista obtenida de la API*/}
        {cargando ? (
          <h1>Cargando...¡Estamos atrapando a los pokemones!</h1>
        ) : (
          <Cards busqueda={busqueda} results={data.results} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
