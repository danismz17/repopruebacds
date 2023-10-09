import React from 'react';
import './Datebox.css';
import { FcPlanner } from 'react-icons/fc';
import holidayDates from './HolidayDates.json'; // Importa el archivo JSON

const Datebox = () => {
    // Obtener la fecha actual
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Sumar 1 al mes porque en JavaScript los meses van de 0 a 11
    const year = today.getFullYear();

    // Formatear la fecha en el formato deseado (día, mes y año)
    const formattedDate = `${day}-${month}-${year}`;

    // Buscar en el archivo JSON si existe una coincidencia para el día y mes actual
    const matchingDate = holidayDates.HolidayDates.find(item => item.date === `${day}-${month}`);

    // El mensaje que se mostrará en el siguiente <h5>
    const message = matchingDate ? matchingDate.message : null;

    console.log("Mensaje del JSON:", message);

    return (
        <>
            <div className="sidebar-info-container">
            <h5><FcPlanner  style={{ marginRight: '5px' }}/>{formattedDate}</h5>
                {message && <h5>{message}</h5>} {/* Muestra el mensaje solo si message no es null */}
                
            </div>
        </>
    );
}

export default Datebox