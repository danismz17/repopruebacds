import React from 'react';
import './SidebarMinify.css';
import { FcPlanner } from 'react-icons/fc';

const SidebarMinify = ({ toggleSidebar }) => {
  const handleMaximizeClick = () => {
    toggleSidebar();
  };

  // Obtener la fecha actual
  const today = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options).replace(/\//g, '-');

  return (
    <>
      <div className="sidebarminify-container entradaSidebar">
        <div className="sidebarminify-logo-container">
          <img src="images\cds-logo.png" alt="" />
        </div>
        <div className="sidebarminify-separador">
        <h5> <FcPlanner  style={{ marginRight: '5px' }}/>{formattedDate}</h5>
        </div>

        <div className="mini-icon-container">
          <span className='mini-icon-user-box'>
            <img src="/images/user-default.png" alt="" />
          </span>
        </div>


        <div className="mini-icon-container" id='maximizar' onClick={handleMaximizeClick}>
          <img src="images\ico\menu.png"/>
        </div>
        <div className="mini-icon-container" onClick={handleMaximizeClick}>
          <img src="images\ico\lupa.png"/>
        </div>
        <div className="mini-icon-container">
          <img src="images\ico\home.png"/>
        </div>
        <div className="mini-icon-container">
          <img src="images\ico\cloud.png"/>
        </div>
        <div className="mini-icon-container">
          <img src="images\ico\catalogo.png"/>
        </div>
        <div className="mini-icon-container">
          <img src="images\ico\autorizacion.png"/>
        </div>
        <div className="mini-icon-container">
          <img src="images\ico\portal.png"/>
        </div>
        <div className="mini-icon-container">
          <img src="images\ico\web.png"/>
        </div>
      </div>
    </>
  );
};

export default SidebarMinify;
