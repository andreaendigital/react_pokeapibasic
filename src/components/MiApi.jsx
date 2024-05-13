import { useState, useEffect } from "react";

// define un hook personalizado llamado UseFetch que se utiliza 
// para realizar una solicitud HTTP (fetch) a una URL especificada 
// y gestionar el estado del resultado de la solicitud 

// el hook personalizado acepta una url como argumento:
export const MiApi = (url) => {
    // Declaramos un estado local con un objeto con dos propiedades 
    const [resultado, setResultado] = useState({cargando:true, data:null})

    // Utiliza useEffect para realizar la solicitud HTTP (fetch) cuando la url cambia. 
    // Esto garantiza que la solicitud se realice nuevamente si la url cambia, por ejemplo, cuando se actualiza. 
   // Encapsula la lógica para realizar la solicitud HTTP a una URL
    useEffect(()=>{
        getDatos(url)
    },[url])
    
    
    async function getDatos(url) {
        setResultado({ cargando: true, data: null }); // Establece el estado de carga mientras se realiza la solicitud
        const resp = await fetch(url); // Realiza la solicitud HTTP a la URL especificada
        const data = await resp.json(); // Analiza la respuesta como JSON
        setResultado({ cargando: false, data }); // Actualiza el estado con los datos recibidos y marca la carga como completa
    }
    return resultado
}