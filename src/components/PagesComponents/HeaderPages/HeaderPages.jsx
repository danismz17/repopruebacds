import React, { useState } from 'react';
import './HeaderPages.css';

export const HeaderPages = () => {
  // Estado para almacenar la opción actual del sidebar
  const [selectedOption, setSelectedOption] = useState('');

  // Función para actualizar la opción seleccionada
  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="header-pages-container">
        <h5>{selectedOption || 'Home'}</h5>
      </div>
    </>
  );
};
