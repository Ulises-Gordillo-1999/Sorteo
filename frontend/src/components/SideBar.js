import React from 'react'; 

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 h-75 p-3 text-white bg-dark" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <i className="bi bi-bootstrap-fill fs-4 me-2"></i>
        <span className="fs-5 fw-semibold">Panel Academicas</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active text-white">
            <i className="bi bi-house-door me-2"></i>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i>
            Aspirantes
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-table me-2"></i>
            Sorteos
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-grid me-2"></i>
            Sorteados
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
