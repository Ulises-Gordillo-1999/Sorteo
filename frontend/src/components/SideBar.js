import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../utils/auth";

const Sidebar = () => {
  const location = useLocation();

  // Función para comprobar si la ruta actual coincide
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="d-flex flex-column flex-shrink-0 h-100 p-3 text-white bg-dark"
      style={{ width: "280px" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i className="bi bi-bootstrap-fill fs-4 me-2"></i>
        <span className="fs-5 fw-semibold">Panel Académicas</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            className={`nav-link text-white ${isActive("/admin/") ? "active" : ""}`}
            to="/admin/"
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link text-white ${isActive("/admin/aspirantes") ? "active" : ""}`}
            to="/admin/aspirantes"
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Aspirantes
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link text-white ${isActive("/admin/sorteo") ? "active" : ""}`}
            to="/admin/sorteo"
          >
            <i className="bi bi-table me-2"></i>
            Sorteos
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link text-white ${isActive("/admin/ejecucionsorteo") ? "active" : ""}`}
            to="/admin/ejecucionsorteo"
          >
            <i className="bi bi-table me-2"></i>
            Ejecucion Sorteo
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link text-white ${isActive("/admin/sorteados") ? "active" : ""}`}
            to="/admin/sorteos"
          >
            <i className="bi bi-grid me-2"></i>
            Historial de Sorteados
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link text-white ${isActive("/admin/settings") ? "active" : ""}`}
            to="/admin/settings"
          >
            <i className="bi bi-gear me-2"></i>
            Settings
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="/admin/profile"
          className={`d-flex align-items-center text-white text-decoration-none ${
            isActive("/admin/profile") ? "active" : ""
          }`}
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>ADMIN</strong>
        </Link>
        <ul className="nav nav-pills flex-column mb-auto">
          <button className="btn btn-danger mt-3" onClick={() => logout()}>
            Cerrar sesión
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;