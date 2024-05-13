// import React from "react";
import { useState, useEffect } from "react";
import { CardPokemon } from "./CardPokemon";
import "./Cards.css";

export const Cards = ({ results, busqueda }) => {
  // Estado local para resultados originales y resultados actuales
  const [resultadosOriginales, setResultadosOriginales] = useState([]);
  const [resultadosActuales, setResultadosActuales] = useState([]);

  // Guardar los resultados iniciales al cargar los datos
  useEffect(() => {
    setResultadosOriginales(results);
    setResultadosActuales(results);
  }, [results]);

  // Función para ordenar resultados por nombre (A - Z)
  const handleSortAZ = () => {
    const sortedResults = [...resultadosActuales].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setResultadosActuales(sortedResults);
  };

      // Función para restaurar resultados originales
    //   const handleRestoreOriginal = () => {
    //     setResultadosOriginales(resultadosOriginales);
    // };
    const handleRestoreOriginal = () => {
        setResultadosActuales([...resultadosOriginales]); // Restaurar copia de resultados originales
    };

    // Filtrar y mapear los resultados para renderizar las cartas
    const filteredResults = resultadosActuales.filter(pokemon => {
        if (busqueda.trim() === '') {
            return true; // Mostrar todos si no hay búsqueda
        } else {
            return pokemon.name.toLowerCase().includes(busqueda.trim().toLowerCase());
        }
    });



  return (
    console.log("Resultados en consola: ", results),
    (
      // Renderiza un contenedor con dos botones y una lista
      <div className="container mb-5 ">
   
  
   <button type="button" className="btn btn-danger btn-lg px-4 py-3" onClick={handleSortAZ}>Ordenar A - Z</button>
            <button type="button" className="btn btn-warning btn-lg px-4 py-3 m-2" onClick={handleRestoreOriginal}>Ordenar por ID</button>
            <ul className="cards mt-4 gap-2">
                {filteredResults.map(pokemon => (
                    <li className="card-item" key={pokemon.name}>
                        <CardPokemon url={pokemon.url} />
                    </li>
                ))}
            </ul>
      </div>
    )
  );
};
