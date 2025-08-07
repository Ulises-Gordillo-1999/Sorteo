import React from "react";
import logoUnca from "../images/logo_unca.jpg";
import logoSA from "../images/LOGO_SA_OFICIAL.jpg";
import imageUnca from "../images/UNCA.jpg";
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
  return (
    <div className="bg-light d-flex flex-column min-vh-100">
      <main className="container py-5 flex-grow-1">
        {/* Encabezado */}
        <div className="text-center mb-4">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-3">
            <img
              src={logoUnca}
              alt="Logo UNCA"
              className="img-fluid rounded"
              style={{ maxHeight: "80px" }}
            />
            <img
              src={logoSA}
              alt="Logo Secretaría Académica"
              className="img-fluid rounded"
              style={{ maxHeight: "80px" }}
            />
          </div>
          <h1 className="fw-bold text-primary">
            SORTEO DE ASPIRANTES - SALA DE 4 AÑOS
          </h1>
          <h4 className="text-secondary">
            Escuela Preuniversitaria “Fray Mamerto Esquiú”
          </h4>
        </div>

        {/* Imagen principal */}
        <div className="mb-5">
          <img
            src={imageUnca}
            alt="Edificio UNCA"
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Tarjetas de información */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card border-0 rounded-4 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">
                  Información General del Sorteo
                </h5>
                <ul className="list-unstyled mt-3">
                  <li>
                    📅 <strong>Lunes 9 de septiembre:</strong> apertura de
                    preinscripciones
                  </li>
                  <li>
                    👶 <strong>Edad:</strong> hasta el 30 de junio de 2026
                  </li>
                  <li>
                    🌐 <strong>Modalidad:</strong> formulario electrónico
                  </li>
                  <li>
                    🔢 <strong>Cupos:</strong> 150 (desde 08:00 hasta 23:00 del
                    martes)
                  </li>
                  <li>
                    ⚠️ <strong>Importante:</strong> no se permite duplicación
                  </li>
                  <li>
                    📩 <strong>Consultas:</strong>{" "}
                    <a href="mailto:academica@unca.edu.ar">
                      academica@unca.edu.ar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 rounded-4 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">
                  Información Importante
                </h5>
                <ul className="list-unstyled mt-3">
                  <li>
                    🎯 <strong>Sorteo:</strong> jueves 19 de septiembre – 10:00
                    h
                  </li>
                  <li>
                    📺 <strong>Transmisión:</strong>{" "}
                    <a
                      href="https://www.youtube.com/@UNCATV"
                      target="_blank"
                      rel="noreferrer"
                    >
                      youtube.com/@UNCATV
                    </a>
                  </li>
                  <li>
                    🎟️ <strong>Vacantes:</strong> X titulares y 10 suplentes
                  </li>
                  <li>
                    📃 <strong>Listado:</strong> www.sorteo4añosfray.unca.edu.ar
                  </li>
                  <li>
                    📢 <strong>Resultados:</strong> web oficial de la UNCA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recordatorio */}
        <div className="mb-4 text-center">
          <h5 className="fw-bold">
            Antes de comenzar, asegúrese de tener a mano:
          </h5>
          <ul className="list-unstyled">
            <li>📄 DNI del niño/a aspirante</li>
            <li>📎 Imagen del DNI para adjuntar</li>
          </ul>
        </div>

        {/* Botón */}
        <div className="text-center mb-5">
          <button
            className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow"
            onClick={() => navigate('/inscripcion')}
          >
            Acceder al Formulario de Preinscripción
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-4 mt-auto">
        <p className="mb-1 fw-semibold">
          &copy; {new Date().getFullYear()} Universidad Nacional de Catamarca
        </p>
        <p className="mb-0">
          Secretaría Académica - Escuela Preuniversitaria "Fray Mamerto Esquiú"
        </p>
        <p className="mb-0">
          Consultas:{" "}
          <a
            href="mailto:academica@unca.edu.ar"
            className="text-white text-decoration-underline fw-semibold"
          >
            academica@unca.edu.ar
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
