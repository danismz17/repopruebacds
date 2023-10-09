import React, { useState } from 'react';
import './InputTextGeneral.css';

export const InputTextGeneral = ({ inputWidth, placeholder, id }) => {
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        setShowCloseButton(newValue.length > 0);

        // Modificamos la expresión regular para incluir los caracteres permitidos
        const regex = /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\s.,:;]*$/; // Usar '*' en lugar de '+' para permitir cadena vacía

        if (!regex.test(newValue) && newValue !== '') {
            const invalidCharacters = newValue.match(/[^A-Za-z0-9áéíóúÁÉÍÓÚñÑ\s.,:;]/g); // Usar 'g' para encontrar todos los caracteres no permitidos
            const uniqueInvalidCharacters = [...new Set(invalidCharacters)]; // Eliminar duplicados
            setError('Caracteres no permitidos: "' + uniqueInvalidCharacters.join(', ') + '"');
            setHasError(true);
        } else {
            setError('');
            setHasError(false);
        }
    };

    const handleContainerClick = () => {
        setInputValue(''); // Establecer el valor del campo de entrada a cadena vacía
        setShowCloseButton(false);
        setError('');
        setHasError(false);
    };

    return (
        <div className="inputTextGeneral-container" style={{ width: inputWidth }} onClick={handleContainerClick}>
            <div className={`inputTextGeneral-box ${hasError ? 'inputTextGeneral-box-error' : ''}`}>
                <input
                    type="text"
                    className="InputTextGeneralStyle"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    id={id}
                />
                {showCloseButton && (
                    <img className='inputContainer-Simple-closebtn' src="/images/ico/close.png" alt="" />
                )}
            </div>
            {error && (
                <div className="regex-box">
                    <img src="images\ico\alert.png" alt="" />
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};
