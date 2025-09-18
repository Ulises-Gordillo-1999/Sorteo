import React from "react";
import logoUnca from "../images/logo_unca.jpg";
import logoSA from "../images/LOGO_SA_OFICIAL.jpg";
import imageUnca from "../images/UNCA.jpg";
import { useNavigate } from "react-router-dom";

const LISTADO_URL_PRE =
  "https://docs.google.com/spreadsheets/d/1rmxWP1TvgtQ7pP8UjtQOaBp1jG5YePD50MebEyhQUDI/edit?usp=sharing"; // ⬅️ Reemplazar por el link real

const LISTADO_URL_SELECCIONADO =
  "https://docs.google.com/spreadsheets/d/15p9dRbI_F3BAkt034RKExjQzPQEc-DLl-ah2L3thNwg/edit?usp=sharing";

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
                    📅 <strong>Preinscripciones:</strong> Lunes 8 de septiembre
                  </li>
                  <li>
                    👶 <strong>Edad:</strong> niños/as que cumplan 4 años hasta
                    el 30 de junio de 2026
                  </li>
                  <li>
                    🌐 <strong>Modalidad:</strong> formulario electrónico
                  </li>
                  <li>
                    🔢 <strong>Cupos:</strong> 150 (desde 08:00 del lunes 8/9
                    hasta 23:00 del martes 9/9)
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
                    🎯 <strong>Sorteo:</strong> miércoles 17 de septiembre –
                    10:00hs
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
                    🎟️ <strong>Vacantes:</strong> 20 titulares y 10 suplentes
                  </li>
                  <li>
                    📢 <strong>Resultados:</strong> web oficial de la UNCA y
                    correo electrónico
                  </li>
                  <li>
                    📅 <strong>Inscripciones:</strong> Padres/tutores de
                    aspirantes sorteados deben retirar requisitos el miércoles
                    24 de septiembre, de 09:00 a 11:00 hs en la escuela.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recordatorio y botón deshabilitados temporalmente
<div className="mb-4 text-center">
  <h5 className="fw-bold">Antes de comenzar, asegúrese de tener a mano:</h5>
  <ul className="list-unstyled">
    <li>📄 DNI del niño/a aspirante</li>
    <li>📎 Imagen del frente del DNI para adjuntar</li>
  </ul>
</div>

<div className="text-center mb-5">
  <button
    className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow"
    onClick={() => navigate('/inscripcion')}
  >
    Acceder al Formulario de Preinscripción
  </button>
</div>
*/}

        {/* Aviso + Listado depurado 
        <div className="mb-4">
          <div className="card border-0 rounded-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary mb-3">
                Listado depurado y aviso de sorteo
              </h5>

             
              <p className="mb-2">
                <strong>Miércoles 17/09 – 10:00 hs:</strong> sorteo de
                aspirantes (sala de 4, ciclo 2026) en el CMU, con transmisión en
                vivo por{" "}
                <a
                  href="https://www.youtube.com/@UNCATV"
                  target="_blank"
                  rel="noreferrer"
                >
                  UNCA TV
                </a>
                .
              </p>

             
              <ul className="mb-3">
                <li>
                  Se sortearán <strong>20 titulares</strong> y{" "}
                  <strong>10 suplentes</strong> entre quienes completaron
                  correctamente el formulario.
                </li>
                <li>
                  El <strong>número de orden</strong> del listado es el número
                  asignado para participar en el sorteo.
                </li>
                <li>
                  Si no figurás en el listado es por{" "}
                  <strong>errores en la carga</strong> de los datos requeridos.
                </li>
              </ul>

              <a
                className="btn btn-outline-primary fw-semibold rounded-pill px-4"
                href={LISTADO_URL_PRE}
                target="_blank"
                rel="noreferrer"
              >
                Ver listado depurado de preinscriptos/as
              </a>
            </div>
          </div>
        </div>
         */}

        {/* Aviso + Listado seleccionado */}
        <div className="mb-4">
          <div className="card border-0 rounded-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary mb-3">
                Listado de seleccionados en el sorteo
              </h5>

              {/* Aclaraciones clave */}
              <ul className="mb-3">
                <li>
                  Se muestran los resultados oficiales del sorteo, donde fueron
                  designados <strong> 20 titulares</strong> y{" "}
                  <strong>10 suplentes</strong> entre las personas que
                  completaron correctamente el formulario de preinscripción.
                </li>
                <li>
                  El <strong>número de orden</strong> en el listado corresponde al número
                  asignado en el sorteo.
                </li>
              </ul>

              <a
                className="btn btn-outline-primary fw-semibold rounded-pill px-4"
                href={LISTADO_URL_SELECCIONADO}
                target="_blank"
                rel="noreferrer"
              >
                Ver listado de seleccionados
              </a>
            </div>
          </div>
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
