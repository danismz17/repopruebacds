import React, { useState } from 'react';
import './App.css';
import Sidebar from './layouts/Sidebar/Sidebar';
import Dashboard from './layouts/Dashboard/Dashboard';
import SidebarMaxify from '../src/components/SidebarComponents/SidebarMaxify/SidebarMaxify';
import SidebarMinify from '..//src/components/SidebarComponents/SidebarMinify/SidebarMinify';
import CDSRoutes from './routes/CDSRoutes';

import Home from './pages/Home/Home';



function App() {
  const [isSidebarMaxify, setIsSidebarMaxify] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarMaxify(!isSidebarMaxify);
  };

  return (
    <>
      <div className="web-container">
        <Sidebar>
          {isSidebarMaxify ? (
            <SidebarMaxify toggleSidebar={toggleSidebar} />
          ) : (
            <SidebarMinify toggleSidebar={toggleSidebar} />
          )}
        </Sidebar>
        <Dashboard >
          
           <Home/> {/*ACA IRIAN LOS COMPONENTES SEGUN SEA DONDE HAYA HECHO CLICK EN EL SIDEBAR */}

        </Dashboard>
      </div>
    </>
  );
}

export default App;
