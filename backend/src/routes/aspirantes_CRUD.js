const express = require("express");
const router = express.Router();
const Aspirante = require("../models/Aspirante");

// Obtener todos los aspirantes
router.get("/", (req, res) => {
    Aspirante.obtenerTodos((err, aspirantes) => {
      if (err)
        return res.status(500).json({ error: "Error al obtener los aspirantes" });
      res.json(aspirantes);
    });
  });

module.exports = router;