import React from 'react';
import Sidebar from './SideBar'; // Asegúrate de tener este componente creado

const Dashboard = () => {
    return (
        <div className="d-flex vh-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenido principal */}
            <div className="h-75 w-75 p-4 bg-light">
                <h1>Contenido Principal</h1>
                {/* Aquí puedes renderizar el contenido principal */}
            </div>
        </div>
    );
};

export default Dashboard;