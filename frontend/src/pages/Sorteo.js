import React, { useState } from "react";
import axios from "axios";
import api from '../utils/axiosConfig'

function Sorteo() {
    const [cantidad, setCantidad] = useState(35);
    const [seleccionados, setSeleccionados] = useState([]);
    
    const realizarSorteo = async () => {
        
        try {
            const response = await api.post("http://localhost:5000/sorteo", { cantidad})
         console.log(response.data)
         setSeleccionados(response.data.seleccionados)
        } catch (error) {
            console.error("Error al realizar el sorteo:", error);
            alert("Error al realizar el sorteo. Por favor, inténtelo de nuevo.");
        }
        
    }

    return (
        <div className="card">
            <div className="card-header bg-success text-white">
                <h3>Realizar Sorteo</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Cantidad de seleccionados</label>
                    <input
                        type="number"
                        className="form-control"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" onClick={realizarSorteo}>Ejecutar Sorteo</button>

                {seleccionados.length > 0 && (
                    <div className="mt-4">
                        <h4>Seleccionados:</h4>
                        <ul className="list-group">
                            {seleccionados.map((asp) => (
                                <li key={asp.id} className="list-group-item">
                                    {asp.nombre} - {asp.dni}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sorteo;        