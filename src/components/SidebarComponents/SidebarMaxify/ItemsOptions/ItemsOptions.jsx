import React, { useState } from 'react';
import { motion } from "framer-motion";
import './ItemsOptions.css';


const RenderMenuItems = (props) => {
    const [isDesplegado, setIsDesplegado] = useState(false);

    const handleToggleDesplegable = () => {
        setIsDesplegado(!isDesplegado);
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <>
            <motion.div
                className="IO-container"
                onClick={handleToggleDesplegable}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: .2 }}
                variants={item}
            >

                <div className="IO-ico-box">
                    {props.ico ? (
                        <img src={props.ico} alt="" />
                    ) : null}
                </div>
                <div className="IO-item-box">
                    <h5>{props.item}</h5>
                </div>
                <div className="IO-desplegable-box">
                    <img
                        src={props.DESPLEGABLEico}
                        className={`img ${isDesplegado ? 'rotated' : 'reverse-rotate'}`}
                        alt=""
                    />
                </div>
            </motion.div>

            {isDesplegado && (
                <div id="desplegable" className="IO-container-desplegable">
                    {props.desplegable &&
                        props.desplegable.map((subItem) => (
                            <RenderSubMenu key={subItem.id} {...subItem} />
                        ))}
                </div>
            )}
        </>
    );
};

const RenderSubMenu = (props) => {
    return (
        <div className="DESPLEGABLE-item-container">
            <div className="IO-ico-box">
                {props.ico ? (
                    <img src={props.ico} alt="" />
                ) : null}
            </div>
            <div className="DESPLEGABLE-item-box">{props.item}</div>
            <div className="IO-desplegable-box">{props.DESPLEGABLEico}</div>
        </div>
    );
};

export const ItemsOptions = ({ ico, DESPLEGABLEico, item, desplegable, tipoMenu }) => {
    return (
        <div className="menu-container">
            <RenderMenuItems ico={ico} DESPLEGABLEico={DESPLEGABLEico} item={item} desplegable={desplegable} tipoMenu={tipoMenu} />
        </div>
    );
};


export default ItemsOptions
