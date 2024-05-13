// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-dark text-light p-4">
//       <div className="container">
//         <h1>¡Bienvenido a la Página Pokémon!</h1>
//         <p>Explora y encuentra a tus Pokémon favoritos</p>
//       </div>
//     </header>
//   );
// };

// export default Header;

import "./Header.css"; // Estilos personalizados para el encabezado
import "bootstrap/dist/css/bootstrap.min.css";
export const Header = () => {
  return (
    // <header className="banner-container text-center">
    <div className="banner-container bg-white text-white m-0">
      <img
        src="https://www.deviantart.com/auraanimation/art/Pokemon-Group-Banner-699213610"
        alt="..."
      />
      <div className="card-img-overlay">
        <h1 className="m-5">¡Atrapa tu pokemon!</h1>
      </div>
    </div>
    // </header>
  );
};
