import React, { useState, useRef } from "react";
import axios from "axios";

const FormularioAspirante = () => {
  const fileInputRef = useRef(null);

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
    dniFile: null, // ← nuevo
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "dniFile") {
      const file = files?.[0];
      if (!file) return;
      // Validación simple: tipos y tamaño (2MB)
      const okTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
      if (!okTypes.includes(file.type)) {
        alert("El DNI debe ser imagen (jpg, png, webp) o PDF.");
        e.target.value = "";
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("El archivo no debe superar los 2MB.");
        e.target.value = "";
        return;
      }
      setFormData((prev) => ({ ...prev, dniFile: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.dniFile) {
      alert("Por favor adjuntá la imagen/PDF del DNI.");
      return;
    }

    const fd = new FormData();
    fd.append("correo", formData.correo);
    fd.append("apellidoAspirante", formData.apellidoAspirante);
    fd.append("nombreAspirante", formData.nombreAspirante);
    fd.append("dniAspirante", formData.dniAspirante);
    fd.append("fechaNacimiento", formData.fechaNacimiento);
    fd.append("apellidoTutor", formData.apellidoTutor);
    fd.append("nombreTutor", formData.nombreTutor);
    fd.append("dniTutor", formData.dniTutor);
    fd.append("telefonoTutor", formData.telefonoTutor);
    fd.append("dniFile", formData.dniFile); // ← archivo

    try {
      const { data } = await axios.post("/inscripcion", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(data.mensaje || "Inscripción registrada con éxito");

      // Reset
      setFormData({
        correo: "",
        apellidoAspirante: "",
        nombreAspirante: "",
        dniAspirante: "",
        fechaNacimiento: "",
        apellidoTutor: "",
        nombreTutor: "",
        dniTutor: "",
        telefonoTutor: "",
        dniFile: null,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
      // navigate("/"); // opcional
    } catch (error) {
      alert(error.response?.data?.error || "Error al registrar el aspirante");
    }
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

        {/* Sección 4 - DNI adjunto */}
        <h4>Adjunto</h4>
        <div className="mb-3">
          <label className="form-label">Adjuntar DNI (imagen o PDF) *</label>
          <input
            ref={fileInputRef}
            type="file"
            name="dniFile"
            accept="image/*,application/pdf"
            className="form-control"
            onChange={handleChange}
            required
          />
          <small className="text-muted">Máximo 2MB. Formatos: JPG, PNG, WEBP o PDF.</small>
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
