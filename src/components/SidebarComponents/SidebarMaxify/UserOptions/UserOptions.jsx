import React from 'react'
import './UserOptions.css'

const UserOptions = (props) => {
  const style = {
    backgroundColor: props.backgroundColor // Usar la prop backgroundColor para establecer el color de fondo
  };

  return (
    <div className="user-sidebar-profile-button" style={style}>
      <span className='user-options-ico-box'>
        <img src={props.useroptionico} alt="User Option Icon" />
      </span>
        
      <span className='user-options-text-box'>
        <a href="#">{props.option}</a>
      </span>
    </div>
  )
}

export default UserOptions
