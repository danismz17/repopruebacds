import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Importa tus componentes

import Home from '../pages/Home/Home.jsx';
import Canales from '../pages/Canales/Canales.jsx';
import Eventos from '../pages/Eventos/Eventos.jsx';


// Define tu componente principal que contendrá las rutas
function CDSRoutes() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/home" component={Home} />
                    <Route path="/canales" component={Canales} />
                    <Route path="/eventos" component={Eventos} />
                </Routes>
            </div>
        </Router>
    );
}

export default CDSRoutes;
