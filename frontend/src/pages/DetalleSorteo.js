import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/axiosConfig';

const DetalleSorteo = () => {
  const { id } = useParams();
  const [titulares, setTitulares] = useState([]);
  const [suplentes, setSuplentes] = useState([]);

  useEffect(() => {
    const fetchDetalle = async () => {
      try {
        const res = await api.get(`/sorteo/seleccionados/${id}`);
        const todos = res.data;
        setTitulares(todos.filter(t => t.tipo === 'titular'));
        setSuplentes(todos.filter(t => t.tipo === 'suplente'));
      } catch (err) {
        console.error("Error al cargar detalle del sorteo", err);
      }
    };
    fetchDetalle();
  }, [id]);

  return (
    <div className="card">
      <div className="card-header bg-secondary text-white">
        <h4>Detalle del Sorteo #{id}</h4>
      </div>
      <div className="card-body">
        <h5>Titulares</h5>
        <ul className="list-group mb-4">
          {titulares.map(a => (
            <li key={`titular-${a.dni}`} className="list-group-item">
              {a.nombre} {a.apellido} – DNI: {a.dni}
            </li>
          ))}
        </ul>

        <h5>Suplentes</h5>
        <ul className="list-group">
          {suplentes.map(a => (
            <li key={`suplente-${a.dni}`} className="list-group-item">
              {a.nombre} {a.apellido} – DNI: {a.dni}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetalleSorteo;
