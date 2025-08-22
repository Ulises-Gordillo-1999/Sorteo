import React, { useState, useEffect } from "react";
import api from "../utils/axiosConfig";

function Sorteo() {
  const [cantidad, setCantidad] = useState(35);
  const [suplentes, setSuplentes] = useState(10);
  const [seleccionados, setSeleccionados] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (seleccionados.length > 0) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [seleccionados]);

  const realizarSorteo = async () => {
    try {
      const response = await api.post("/sorteo", {
        cantidad,
        suplentes,
      });

      const data = response.data?.seleccionados;
      console.log(data)
      console.log(response)

      if (data && data.length > 0) {
        localStorage.setItem("seleccionados", JSON.stringify(data));
        setSeleccionados(data);
        //navigate("/admin/ejecucionsorteo");
      } else {
        alert("No se recibieron datos del sorteo.");
      }
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
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad de suplentes</label>
          <input
            type="number"
            className="form-control"
            value={suplentes}
            onChange={(e) => setSuplentes(Number(e.target.value))}
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
        {showSuccess && (
          <div className="alert alert-success mt-4" role="alert">
            Sorteo realizado exitosamente.
          </div>
        )}
      </div>
    </div>
  );
}

export default Sorteo;
