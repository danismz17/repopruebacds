import React from 'react';
import './menu.css';

const Menu = ({ toggleSidebar }) => {
    const handleMinimizeClick = () => {
        toggleSidebar();
        console.log('Clic en el botón de minimizar');
    };

    return (
        <>
            <div className="menubutton-container" id='minimizar' onClick={handleMinimizeClick}>
                <div className="menubutton-container-ico-box">
                    <img src="/images/ico/menu.png" alt="" />
                </div>

                <div className="menubutton-container-tittle-box">
                    <h5>Menu</h5>
                </div>
            </div>
        </>
    );
};

export default Menu;
