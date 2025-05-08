import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../utils/axiosConfig'; // Asegúrate de tener la configuración de axios en este archivo

function Aspirantes() {
    const [aspirantes, setAspirantes] = useState([]);

    useEffect(() => {
        const fetchAspirantes = async () => {
            try {
                const response = await api.get("http://localhost:5000/aspirantes");
                setAspirantes(response.data);
            } catch (error) {
                console.error("Error al obtener aspirantes:", error);
            }
        };
        fetchAspirantes();
    }, []);

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3>Lista de Aspirantes</h3>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>DNI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aspirantes.map(asp => (
                            <tr key={asp.id}>
                                <td>{asp.id}</td>
                                <td>{asp.nombre}</td>
                                <td>{asp.dni}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Aspirantes;
