import React from 'react'
import './BtnGeneral.css'

export const BtnVerde = ({ text, onClick }) => (
    <button className="BtnVerde" onClick={onClick}>
        {text}
    </button>
);

export const BtnRojo = ({ text, onClick }) => (
    <button className="BtnRojo" onClick={onClick}>
        {text}
    </button>
);

export const BtnAmarillo = ({ text, onClick }) => (
    <button className="BtnAmarillo" onClick={onClick}>
        {text}
    </button>
);

export const BtnAzul = ({ text, onClick }) => (
    <button className="BtnAzul" onClick={onClick}>
        {text}
    </button>
);

export const BtnGris = ({ text, onClick, className }) => (
    <button className="BtnGris" onClick={onClick}>
        {text}
    </button>
);


export default {
    BtnVerde,
    BtnRojo,
    BtnAmarillo,
    BtnAzul,
    BtnGris,
};
