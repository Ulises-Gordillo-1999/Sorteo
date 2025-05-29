const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/sorteo.db"); // Ajustar si tu ruta es distinta

db.serialize(() => {
  db.run("UPDATE sorteados SET tipo = 'titular' WHERE tipo IS NULL", (err) => {
    if (err) {
      console.error("❌ Error al actualizar los registros:", err.message);
    } else {
      console.log("✅ Registros actualizados: tipo = 'titular' donde era NULL");
    }
    db.close();
  });
});
