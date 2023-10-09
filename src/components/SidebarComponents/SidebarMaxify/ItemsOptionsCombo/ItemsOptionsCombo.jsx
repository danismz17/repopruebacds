import React from 'react'
import './ItemsOptionsCombo.css'

export const ItemsOptionsCombo = () => {
  return (
    <>
                        <div className="DESPLEGABLE-item-container">
                        <div className="DESPLEGABLE-ico-box">
                        {props.desplegable.ico}
                        </div>

                        <div className="DESPLEGABLE-item-box">
                        {props.desplegable.item}
                        </div>
                    </div>
    </>  )
}
