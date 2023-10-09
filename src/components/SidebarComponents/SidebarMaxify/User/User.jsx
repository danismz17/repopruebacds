import React, { useEffect } from 'react';
import './User.css';
import { motion, useAnimation } from 'framer-motion';
import UserOptions from '../UserOptions/UserOptions';

const User = ({ toggleUserView }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 }); // Iniciar la animación cuando el componente se monte
  }, [controls]);

  return (
    <>
      <div className="user-sidebar-container">
        <motion.div
          className="user-photo-container"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
        >
          <span className='picture-box'>
            <img src="/images/user-default.png" alt="" />
          </span>
          <h4>Nombre de Usuario</h4>
          <h6>seccion</h6>
        </motion.div>
        <motion.div
          className="user-sidebar-controls-container"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
        >
          <UserOptions
            useroptionico="/images/ico/editar.png"
            option="Editar Perfil"
          />
          <UserOptions
            useroptionico="/images/ico/set.png"
            option="Configuraciones"
          />
          <UserOptions
            useroptionico="/images/ico/frontend.png"
            option="Frontend"
          />
          <UserOptions
            useroptionico="/images/ico/exit.png"
            option="Salir"
            backgroundColor="#a43d3d"
          />
        </motion.div>
        <motion.div
          className="user-minimizar-container"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          onClick={toggleUserView}
        >
          <img id='userMinify' src="images/ico/left.png" alt="" />
        </motion.div>
      </div>
    </>
  );
}

export default User;
