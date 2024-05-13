import { MiApi } from "./MiApi";
import "./Cards.css";

export const CardPokemon = ({ url }) => {
  const estado = MiApi(url);
  const { cargando, data } = estado;
  return (
    <div >
      {
        // operador ternario para renderizar condicionalmente el contenido del componente.
        //Si cargando es true, muestra un mensaje de "Cargando"; de lo contrario,
        // muestra los detalles del Pokémon recuperados de la API.
        //Si cargando es false (es decir, los datos están listos),
        //renderiza la información del Pokémon en una tarjeta
        cargando ? (
          <h1>Cargando</h1>
        ) : (
          <div className="card" style={{ width: "16rem" }}>
             <h5 className="card-title"> ID: {data.id} </h5>
             <h5 className="card-text text-capitalize">
                Nombre: {data.forms[0].name}
              </h5>
            <div className="card-body">
              <img src={data.sprites.front_default} alt="pokemon" />
            </div>
            {/* <div className="card-footer">
              <p className="card-text text-capitalize">
                Nombre: {data.forms[0].name}
              </p>
            </div> */}
          </div>
        )
      }
    </div>
  );
};
