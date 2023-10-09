import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import './SidebarMaxify.css';
import Logo from './Logo/Logo';
import Datebox from './Datebox/Datebox';
import ItemsOptions from './ItemsOptions/ItemsOptions';
import data from '../ItemsData.json';
import SidebarSearch from './SidebarSearch/SidebarSearch';
import Menu from './Menu/Menu';
import User from './User/User';
import UserMinify from './UserMinify/UserMinify';

const SidebarMaxify = ({ toggleSidebar }) => {
  const [showUserMinify, setShowUserMinify] = useState(true);
  const [showUser, setShowUser] = useState(false);

  const toggleUserView = () => {
    if (showUserMinify) {
      setShowUserMinify(false);
      setShowUser(true);
    }
  };

  const toggleUserMinify = () => {
    setShowUserMinify(true);
    setShowUser(false);
  };

  return (
    <div className="sidebarmaxify-container entradaSidebar">
      <Logo />
      <Datebox />
      <div id="userMaxify" onClick={toggleUserView}>
        {showUserMinify && !showUser && <UserMinify />}
        {showUser && <User toggleUserView={toggleUserMinify} />}
      </div>
      <Menu toggleSidebar={toggleSidebar} />
      <SidebarSearch />
      <div className="items-menu-container">
        {data.map((menuItem) => (
          <ItemsOptions key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default SidebarMaxify;
