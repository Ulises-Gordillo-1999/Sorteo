import React, { useEffect, useState } from "react";
import axios from "axios";

function Aspirantes() {
    const [aspirantes, setAspirantes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/aspirantes")
            .then(response => setAspirantes(response.data))
            .catch(error => console.error("Error al obtener aspirantes:", error));
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
