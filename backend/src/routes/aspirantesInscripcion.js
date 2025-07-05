const express = require("express");
const router = express.Router();
const enviarCorreo = require("../utils/mailer");
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

  Aspirante.agregar(nuevoAspirante, async (err, id) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ mensaje: "Aspirante registrado con éxito", id });

    //Envio de mail de confirmacion de registro
    await enviarCorreo(
      nuevoAspirante.correo,
      "Confirmación de Preinscripción",
      `<p>Hola ${nuevoAspirante.nombre_tutor},</p>
   <p>Se ha registrado correctamente la preinscripción del aspirante <strong>${nuevoAspirante.nombre} ${nuevoAspirante.apellido}</strong>.</p>
   <p><strong>DNI:</strong> ${nuevoAspirante.dni} <br>
   <strong>Fecha de nacimiento:</strong> ${nuevoAspirante.fecha_nacimiento}</p>
   <p>Gracias por registrarse.</p>`
    );
  });
});

module.exports = router;
