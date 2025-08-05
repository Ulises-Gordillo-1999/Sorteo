// SorteoAnimado.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const SorteoAnimado = ({ seleccionados = [], onFinish }) => {
  const [actualIndex, setActualIndex] = useState(-1);

  useEffect(() => {
    if (seleccionados.length === 0) return;
    let i = 0;
    const intervalo = setInterval(() => {
      setActualIndex(i);
      i++;
      if (i >= seleccionados.length) {
        clearInterval(intervalo);
        if (onFinish) onFinish(); // callback al terminar
        localStorage.removeItem('seleccionados');
      }
    }, 1200);
    return () => clearInterval(intervalo);
  }, [seleccionados]);

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">🎉 Sorteando...</h2>

      <div className="d-flex justify-content-center">
        <motion.div
          className="p-4 border rounded bg-light shadow"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={actualIndex}
        >
          {actualIndex >= 0 && seleccionados[actualIndex] ? (
            <div>
              <h4>
                {seleccionados[actualIndex].apellido},{" "}
                {seleccionados[actualIndex].nombre}
              </h4>
              <p>
                <strong>DNI:</strong> {seleccionados[actualIndex].dni}
              </p>
              <span className="badge bg-primary text-uppercase">
                {seleccionados[actualIndex].tipo}
              </span>
            </div>
          ) : (
            <p>Preparando sorteo...</p>
          )}
        </motion.div>
      </div>

      <div className="mt-5">
        <h5>Lista actual</h5>
        <ul className="list-group mx-auto" style={{ maxWidth: 400 }}>
          {seleccionados.slice(0, actualIndex + 1).map((a, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {a.apellido}, {a.nombre}
              <span className="badge bg-secondary">{a.tipo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SorteoAnimado;
