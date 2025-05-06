const express = require("express");
const router = express.Router();
const db = require("../../database/db");

// 📌 Obtener por numero de sorteo realizado
router.get("/seleccionados", (req, res) => {
    const {sorteoNumero} = req.body
    if (!sorteoNumero) {
        return res.status(400).json({ error: "Número de sorteo no proporcionado" });
    }

    db.all("SELECT * FROM sorteados WHERE sorteo_id = ?", [sorteoNumero], (err, sorteados) => {
        if (err) return res.status(500).json({ error: "Error al obtener sorteos" });

        res.json(sorteados);
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
    const { cantidad } = req.body;
    
    if (!cantidad || cantidad <= 0) {
        return res.status(400).json({ error: "Cantidad de sorteados inválida" });
    }

    db.all("SELECT * FROM aspirantes", [], (err, aspirantes) => {
        if (err) return res.status(500).json({ error: "Error al obtener aspirantes" });

        if (aspirantes.length < cantidad) {
            return res.status(400).json({ error: "No hay suficientes aspirantes inscritos" });
        }

        // 📌 Mezclar la lista de aspirantes de forma aleatoria
        const seleccionados = aspirantes
            .sort(() => Math.random() - 0.5)
            .slice(0, cantidad);

        // 📌 Guardar el sorteo en la base de datos
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
    });
});


module.exports = router;
