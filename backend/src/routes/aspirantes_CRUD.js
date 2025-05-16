const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const Aspirante = require("../models/Aspirante");

// Obtener todos los aspirantes
router.get("/", (req, res) => {
  Aspirante.obtenerTodos((err, aspirantes) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener los aspirantes" });
    res.json(aspirantes);
  });
});

// Obtener un aspirante por ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const datosActualizados = { ...req.body };

  // Eliminar campos que no deben actualizarse
  delete datosActualizados.id;
  delete datosActualizados.fecha_registro;

  if (!datosActualizados || Object.keys(datosActualizados).length === 0) {
    return res.status(400).json({ error: "Datos de actualización vacíos" });
  }

  const campos = Object.keys(datosActualizados)
    .map((key) => `${key} = ?`)
    .join(", ");
  const valores = Object.values(datosActualizados);

  const sql = `UPDATE aspirantes SET ${campos} WHERE id = ?`;

  db.run(sql, [...valores, id], function (err) {
    if (err)
      return res
        .status(500)
        .json({ error: "Error al actualizar el aspirante" });
    res.json({ mensaje: "Aspirante actualizado con éxito" });
  });
});

// Eliminar un aspirante por ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM aspirantes WHERE id = ?", [id], function (err) {
    if (err)
      return res.status(500).json({ error: "Error al eliminar el aspirante" });
    res.json({ mensaje: "Aspirante eliminado con éxito" });
  });
});

module.exports = router;
