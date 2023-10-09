import React, { useState, useEffect } from 'react';
import './SidebarSearch.css';
import { FcSearch } from 'react-icons/fc';
import ItemsOptions from '../ItemsOptions/ItemsOptions';
import data from '../../ItemsData.json';

const SidebarSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    // Filtra los resultados del JSON basados en el valor de búsqueda
    const filteredResults = filterItems(data, inputValue);
    setSearchResults(filteredResults);

    // Controla la visibilidad de los resultados
    setResultsVisible(inputValue !== '' && filteredResults.length > 0);
  }, [inputValue]);

  useEffect(() => {
    // Filtra los resultados del JSON basados en el valor de búsqueda
    const filteredResults = filterItems(data, inputValue);
    setSearchResults(filteredResults);
  }, [inputValue]);

  const handleInputChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    setInputValue(newValue);

    // Reiniciar los resultados cuando se cambia el valor del input
    setSearchResults([]);
  };

  const handleClearInput = () => {
    setInputValue(''); // Limpiar el valor del campo de búsqueda
    setSearchResults([]);
  };

  const handleInputClick = () => {
    setResultsVisible(true); // Mostrar resultados al hacer clic en el input
  };

  return (
    <>
      <div className="sidebar-IO-special-row">
        <div className="sidebar-IO-special-row-ico-box">
          <FcSearch />
        </div>

        <div className="sidebar-IO-special-row-search-box">
          <input
            type="text"
            placeholder="Buscar"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick} // Agregar el manejador de eventos onClick
          />
        </div>

        <div className='sidebar-delete-box'>
          {inputValue !== '' && (
            <img
              id='clearSearchbtn'
              className='clearSearchbtn'
              src="images/ico/close.png"
              alt=""
              onClick={handleClearInput} // Agregar el manejador de eventos
            />
          )}
        </div>
      </div>

      <div className={`search-results-box ${isResultsVisible ? 'visible' : 'hidden'}`}>
        {isResultsVisible && (
          searchResults.map((result) => (
            <ItemsOptions key={result.id} ico={result.ico} item={result.item} />
          ))
        )}
        {inputValue !== '' && !isResultsVisible && <p>No se encontraron resultados</p>}
      </div>
    </>
  );
};

// Función para filtrar los elementos de forma recursiva sin duplicaciones
const filterItems = (items, query) => {
  const filteredItems = new Set();

  const search = (item) => {
    // Elimina las tildes y convierte todo a minúsculas
    const normalizedQuery = normalizeText(query);

    // Elimina las tildes y convierte todo a minúsculas
    const normalizedItem = normalizeText(item.item.toLowerCase());

    if (normalizedItem.includes(normalizedQuery)) {
      filteredItems.add(item);
    }

    if (item.desplegable) {
      for (const subItem of item.desplegable) {
        search(subItem);
      }
    }
  };

  for (const item of items) {
    search(item);
  }

  return [...filteredItems];
};

// Función para eliminar tildes y convertir a minúsculas
const normalizeText = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

export default SidebarSearch;
