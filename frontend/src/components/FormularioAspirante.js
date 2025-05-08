import React, { useState } from "react";
import axios from "axios";

const FormularioAspirante = () => {
  const [formData, setFormData] = useState({
    correo: "",
    apellidoAspirante: "",
    nombreAspirante: "",
    dniAspirante: "",
    fechaNacimiento: "",
    apellidoTutor: "",
    nombreTutor: "",
    dniTutor: "",
    telefonoTutor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData); // Para depuración

    axios.post("http://localhost:5000/inscripcion", formData)
    .then(response => {
      alert(response.data.mensaje); // Mensaje de éxito
      setFormData({ // Reseteamos el formulario
        correo: "",
        apellido: "",
        nombre: "",
        dni: "",
        fechaNacimiento: "",
        apellidoTutor: "",
        nombreTutor: "",
        dniTutor: "",
        telefonoTutor: "",
      });
    })
    .catch(error => {
      alert(error.response?.data?.error || "Error al registrar el aspirante");
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Solicitud de Preinscripción 2026</h2>
      <p className="text-muted text-center">
        La información solicitada a continuación es necesaria para realizar la preinscripción.
      </p>

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
        {/* Sección 1 - Correo */}
        <h4>Correo Electrónico</h4>
        <div className="mb-3">
          <label className="form-label">Correo *</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Sección 2 - Datos del Aspirante */}
        <h4>Datos del Aspirante</h4>
        <div className="mb-3">
          <label className="form-label">Apellido/s del aspirante *</label>
          <input
            type="text"
            className="form-control"
            name="apellidoAspirante"
            value={formData.apellidoAspirante}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre/s del aspirante *</label>
          <input
            type="text"
            className="form-control"
            name="nombreAspirante"
            value={formData.nombreAspirante}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de DNI *</label>
          <input
            type="number"
            className="form-control"
            name="dniAspirante"
            value={formData.dniAspirante}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento *</label>
          <input
            type="date"
            className="form-control"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        {/* Sección 3 - Datos del Tutor */}
        <h4>Datos del Tutor/a</h4>
        <div className="mb-3">
          <label className="form-label">Apellido/s del tutor *</label>
          <input
            type="text"
            className="form-control"
            name="apellidoTutor"
            value={formData.apellidoTutor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre/s del tutor *</label>
          <input
            type="text"
            className="form-control"
            name="nombreTutor"
            value={formData.nombreTutor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de DNI del tutor *</label>
          <input
            type="number"
            className="form-control"
            name="dniTutor"
            value={formData.dniTutor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de teléfono del tutor *</label>
          <input
            type="tel"
            className="form-control"
            name="telefonoTutor"
            value={formData.telefonoTutor}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary w-100">
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default FormularioAspirante;
// Este componente es un formulario de preinscripción para aspirantes.
// Contiene campos para ingresar datos del aspirante y del tutor.