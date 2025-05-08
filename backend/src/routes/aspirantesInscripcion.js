const express = require("express");
const router = express.Router();
const Aspirante = require("../models/Aspirante");

// Agregar un aspirante
router.post("/", (req, res) => {
  console.log("Datos recibidos:", req.body); // Para depuración
  const {
    correo,
    apellidoAspirante: apellido,
    nombreAspirante: nombre,
    dniAspirante: dni,
    fechaNacimiento: fecha_nacimiento,
    apellidoTutor: apellido_tutor,
    nombreTutor: nombre_tutor,
    dniTutor: dni_tutor,
    telefonoTutor: telefono_tutor,
  } = req.body;
  console.log("Datos transformados:", {
    correo,
    apellido,
    nombre,
    dni,
    fecha_nacimiento,
    apellido_tutor,
    nombre_tutor,
    dni_tutor,
    telefono_tutor,
  });

  if (
    !correo ||
    !apellido ||
    !nombre ||
    !dni ||
    !fecha_nacimiento ||
    !apellido_tutor ||
    !nombre_tutor ||
    !dni_tutor ||
    !telefono_tutor
  ) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const nuevoAspirante = {
    correo,
    apellido,
    nombre,
    dni,
    fecha_nacimiento,
    apellido_tutor,
    nombre_tutor,
    dni_tutor,
    telefono_tutor,
  };

  Aspirante.agregar(nuevoAspirante, (err, id) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ mensaje: "Aspirante registrado con éxito", id });
  });
});

module.exports = router;