import React from "react";

const Profile = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="rounded-circle mb-3"
                            />
                            <h4 className="card-title">Administrador del Sistema</h4>
                            <p className="card-text text-muted">Usuario Administrador</p>
                            <button className="btn btn-primary btn-sm">Editar Perfil</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h5>Información Personal</h5>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <strong>Nombre Completo:</strong>
                                    <p>Juan Pérez</p>
                                </div>
                                <div className="col-md-6">
                                    <strong>Correo Electrónico:</strong>
                                    <p>admin@example.com</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <strong>Teléfono:</strong>
                                    <p>+123 456 7890</p>
                                </div>
                                <div className="col-md-6">
                                    <strong>Dirección:</strong>
                                    <p>Calle Falsa 123</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-4">
                        <div className="card-header bg-secondary text-white">
                            <h5>Funciones Administrativas</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Gestión de Usuarios:</strong> Crear, editar y eliminar usuarios.
                                </li>
                                <li className="list-group-item">
                                    <strong>Gestión de Contenido:</strong> Supervisar y actualizar información del sistema.
                                </li>
                                <li className="list-group-item">
                                    <strong>Reportes:</strong> Generar reportes de actividad y estadísticas.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
