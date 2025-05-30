import React, { useState } from "react";
import api from "../utils/axiosConfig";
import ExportarExcel from "../components/ExportarExcel";

function Sorteo() {
  const [cantidad, setCantidad] = useState(35);
  const [suplentes, setSuplentes] = useState(10);
  const [seleccionados, setSeleccionados] = useState([]);

  const realizarSorteo = async () => {
    try {
      const response = await api.post("http://localhost:5000/sorteo", {
        cantidad,
        suplentes,
      });
      console.log(response.data);
      setSeleccionados(response.data.seleccionados);
      //console.log(seleccionados)
    } catch (error) {
      console.error("Error al realizar el sorteo:", error);
      alert("Error al realizar el sorteo. Por favor, inténtelo de nuevo.");
    }
  };

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
        <div className="mb-3">
          <label className="form-label">Cantidad de suplentes</label>
          <input
            type="number"
            className="form-control"
            value={suplentes}
            onChange={(e) => setSuplentes(e.target.value)}
          />
        </div>
        <div className="mb-3">
          {cantidad > suplentes ? (
            <div className="alert alert-success" role="alert">
              <strong>Asignación exitosa:</strong> Saldrán{" "}
              <span className="fw-bold">{cantidad - suplentes}</span> titulares
              y <span className="fw-bold">{suplentes}</span> suplentes.
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              <strong>Atención:</strong> La cantidad debe ser mayor que la de
              suplentes.
            </div>
          )}
        </div>

        <button className="btn btn-success" onClick={realizarSorteo}>
          Ejecutar Sorteo
        </button>

        {seleccionados.length > 0 && (
          <div className="mt-4">
            <h4>Seleccionados:</h4>
            <ExportarExcel datos={seleccionados} />
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
