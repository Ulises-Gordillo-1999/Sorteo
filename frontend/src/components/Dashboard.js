import React from 'react';
import Sidebar from './SideBar'; // Asegúrate de tener este componente creado
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    //console.log(localStorage.getItem('token')) // Verifica si el token se guarda correctamente

    return (
        <div className="d-flex vh-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenido principal */}
            <div className="h-75 w-75 p-4 bg-light overflow-auto">
                <h1 className="text-center">Panel de Administración</h1>
                <hr />
                <p className="text-center">Bienvenido al panel de administración. Aquí puedes gestionar los aspirantes y los sorteos.</p>
                {/* Aquí puedes renderizar el contenido principal */}
                <Outlet/> {/* Esto renderiza las rutas anidadas dentro del Dashboard */}  
            </div>
        </div>
    );
};

export default Dashboard;