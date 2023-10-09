import React from 'react'
import { motion } from 'framer-motion'
import './UserMinify.css'

const UserMinify = () => {
    // Definir las propiedades de animación
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.1 } }
    }

    return (
        <motion.div 
            className="userminify-sidebar-container" 
            id='userMaxify'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="userminify-photo-container">
                <span className='userminify-photo-box'>
                    <img src="images/user-default.png" alt="" />
                </span>
            </div>

            <div className="userminify-name-container">
                <h5>Nombre de Usuario</h5>
            </div>
        </motion.div>
    )
}

export default UserMinify
