const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/sorteo.db"); // Ajustá si tu DB tiene otro nombre o ruta

db.serialize(() => {
  db.run("ALTER TABLE sorteados ADD COLUMN tipo TEXT", (err) => {
    if (err) {
      console.error("Error al modificar tabla:", err.message);
    } else {
      console.log("✅ Columna 'tipo' agregada correctamente.");
    }
    db.close();
  });
});
