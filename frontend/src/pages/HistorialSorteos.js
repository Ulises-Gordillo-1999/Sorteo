import React, { useEffect, useState } from 'react';
import api from '../utils/axiosConfig';
import { Link } from 'react-router-dom';

const HistorialSorteos = () => {
  const [sorteos, setSorteos] = useState([]);

  useEffect(() => {
    const fetchSorteos = async () => {
      try {
        const res = await api.get('/sorteo/historial');
        setSorteos(res.data);
      } catch (err) {
        console.error('Error al obtener historial:', err);
      }
    };
    fetchSorteos();
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-success text-white">
        <h4>Historial de Sorteos</h4>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Titulares</th>
              <th>Suplentes</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {sorteos.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.fecha_sorteo}</td>
                <td>{s.titulares}</td>
                <td>{s.suplentes}</td>
                <td>
                  <Link to={`/admin/sorteos/${s.id}`} className="btn btn-sm btn-primary">
                    Ver detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialSorteos;
