const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const { obtenerFechaArgentina } = require("../utils/fecha"); // si no está importado, agregalo

// 📌 Obtener por numero de sorteo realizado
// 📌 Obtener los titulares y suplentes de un sorteo
router.get("/seleccionados/:id", (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT a.nombre, a.apellido, a.dni, s.tipo
    FROM sorteados s
    JOIN aspirantes a ON a.id = s.aspirante_id
    WHERE s.sorteo_id = ?
    ORDER BY s.tipo, a.apellido
  `;

  db.all(sql, [id], (err, filas) => {
    if (err) {
      console.error("ERROR SQL detalle sorteo:", err);
      return res.status(500).json({ error: "Error al obtener seleccionados" });
    }
    res.json(filas);
  });
});

// 📌 Obtener todos los sorteos realizados
router.get("/", (req, res) => {
  db.all("SELECT * FROM sorteados", [], (err, sorteados) => {
    if (err) return res.status(500).json({ error: "Error al obtener sorteos" });

    res.json(sorteados);
  });
});

// 📌 Ejecutar el sorteo
router.post("/", (req, res) => {
  const { cantidad, suplentes } = req.body;

  if (!cantidad || cantidad <= 0) {
    return res.status(400).json({ error: "Cantidad de sorteados inválida" });
  }

  const totalSuplentes = suplentes ?? 10; // Por defecto 10 suplentes
  const totalTitulares = cantidad - totalSuplentes;

  if (totalTitulares < 0) {
    return res
      .status(400)
      .json({ error: "Cantidad de suplentes supera a la cantidad total" });
  }

  db.all("SELECT * FROM aspirantes", [], (err, aspirantes) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener aspirantes" });

    if (aspirantes.length < cantidad) {
      return res
        .status(400)
        .json({ error: "No hay suficientes aspirantes inscritos" });
    }

    // 📌 Mezclar la lista de aspirantes de forma aleatoria
    const seleccionados = aspirantes
      .sort(() => Math.random() - 0.5)
      .slice(0, cantidad);

    const fecha_sorteo = obtenerFechaArgentina();
    // 📌 Guardar el sorteo en la base de datos
    // Guardar el sorteo en la base de datos
    db.run("INSERT INTO sorteos (fecha_sorteo) VALUES (?)", [fecha_sorteo], function (err) {
      if (err)
        return res.status(500).json({ error: "Error al registrar el sorteo" });

      const sorteo_id = this.lastID;

      const insertStmt = db.prepare(
        "INSERT INTO sorteados (sorteo_id, aspirante_id, tipo) VALUES (?, ?, ?)"
      );

      seleccionados.forEach((aspirante, index) => {
        const tipo = index < totalTitulares ? "titular" : "suplente";
        insertStmt.run(sorteo_id, aspirante.id, tipo);
      });

      insertStmt.finalize();

      res.json({ mensaje: "Sorteo realizado con éxito", seleccionados });
    });
  });
});

// Obtener historial de sorteos con cantidad de titulares y suplentes
router.get("/historial", (req, res) => {
  const sql = `
    SELECT s.id AS id, s.fecha_sorteo,
           SUM(CASE WHEN so.tipo = 'titular' THEN 1 ELSE 0 END) AS titulares,
           SUM(CASE WHEN so.tipo = 'suplente' THEN 1 ELSE 0 END) AS suplentes
    FROM sorteos s
    LEFT JOIN sorteados so ON s.id = so.sorteo_id
    GROUP BY s.id
    ORDER BY s.id DESC
  `;

  db.all(sql, [], (err, filas) => {
    if (err) {
      console.error("ERROR SQL /historial:", err);
      return res.status(500).json({ error: "Error al obtener historial" });
    }
    res.json(filas);
  });
});

module.exports = router;

/*
db.run("INSERT INTO sorteos DEFAULT VALUES", [], function (err) {
            if (err) return res.status(500).json({ error: "Error al registrar el sorteo" });

            const sorteo_id = this.lastID;

            // 📌 Insertar los seleccionados en la tabla sorteados
            const insertStmt = db.prepare("INSERT INTO sorteados (sorteo_id, aspirante_id) VALUES (?, ?)");

            seleccionados.forEach(aspirante => {
                insertStmt.run(sorteo_id, aspirante.id);
            });

            insertStmt.finalize();

            res.json({ mensaje: "Sorteo realizado con éxito", seleccionados });
        });
*/
