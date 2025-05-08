import React from "react";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>Bienvenido</h2>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="mb-4">
                                Has accedido al sistema de Académicas del Sorteo
                            </h4>
                            <p className="text-muted">
                                Explora las funcionalidades disponibles en el menú para gestionar tus actividades.
                            </p>
                            <button className="btn btn-primary mt-3">Ir al Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;