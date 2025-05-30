import React from 'react';
import { Link } from 'react-router-dom';
import './HomeUnca.css';
import logoUnca from '../images/logo_unca.jpg'; // Importa las imágenes si es necesario
import logoOficial from '../images/LOGO_SA_OFICIAL.jpg';

function Home() {
  return (
    <div className="home-container mw-100 text-center text-white">
      <div className="overlay ">
        <div className="container-fluid px-0 py-5">
          <div className="row justify-content-center mx-0">
            <div className="col-lg-10 px-0">
              <img src={logoUnca} alt="Logo UNCA" className="img-fluid mb-3 me-2" style={{ maxHeight: '80px' }} />
              <img src={logoOficial} alt="Logo Secretaría Académica" className="img-fluid mb-3" style={{ maxHeight: '80px' }} />

              <h1 className="display-5 fw-bold">PREINSCRIPCIONES PARA SALA DE 4 AÑOS</h1>
              <h3 className="mb-4">Escuela Preuniversitaria "Fray Mamerto Esquiú"</h3>

              <p className="lead">
                <strong>Fecha de sorteo:</strong> agosto 2025 a las 10.00 h <br />
                <strong>Transmisión:</strong> www.youtube.com/@UNCATV <br />
                <strong>Vacantes:</strong> X titulares y 10 suplentes <br />
                <strong>Listado de preinscriptos:</strong> se publica el día xxxx en www.sorteo4añosfray.unca.edu.ar <br />
                <strong>Resultados:</strong> disponibles en la página web oficial
              </p>

              <hr className="bg-white" />

              <h4>GACETILLA DE PRENSA</h4>
              <p>
                La Secretaría Académica de la Universidad Nacional de Catamarca informa que el día lunes 9 de septiembre se realizará la preinscripción para el Ciclo Lectivo 2025 de los/as niños/as aspirantes a ingresar a sala de 4 (cuatro) años del Nivel Inicial de la Escuela Preuniversitaria "Fray Mamerto Esquiú". Podrán anotarse niños/as que cumplan 4 años hasta el 30 de junio de 2026.
              </p>
              <p>
                Las preinscripciones se llevarán a cabo a través del formulario Digital de Preinscripción, que estará disponible en la página web oficial de la Universidad Nacional de Catamarca (www.unca.edu.ar) y en la página web del sorteo (www.sorteo4añosfray.unca.edu.ar),:
                que estará habilitado desde las 08:00 am del lunes 9 de septiembre hasta las 23:00 pm del martes 10 de septiembre o hasta completar el cupo de 150 preinscriptos.
              </p>
              <p>
                <strong>Importante:</strong> solo se efectivizará la preinscripción de quienes hayan proporcionado datos completos y correctos.
              </p>
              <p>
                El sorteo para cubrir las vacantes se realizará el jueves 19 de septiembre por la mañana (horario a confirmar) y será transmitido en vivo por www.youtube.com/@UNCATV
              </p>
              <p>
                Consultas: <a href="mailto:academica@unca.edu.ar" className="text-white">academica@unca.edu.ar</a>
              </p>

              <Link to="/inscripcion" className="btn btn-light mt-4 fw-bold px-4 py-2">
                Ir a Preinscripción
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
