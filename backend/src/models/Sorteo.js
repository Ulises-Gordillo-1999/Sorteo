const db = require("../database/db");

class Sorteo {
  static registrarSorteo(aspirantes, archivo_resultado, callback) {
    const sql = `INSERT INTO sorteos (aspirantes_sorteados, archivo_resultado) VALUES (?, ?)`;
    db.run(sql, [JSON.stringify(aspirantes), archivo_resultado], function (err) {
      callback(err, this ? this.lastID : null);
    });
  }

  static obtenerHistorial(callback) {
    const sql = `SELECT * FROM sorteos ORDER BY fecha_sorteo DESC`;
    db.all(sql, [], callback);
  }
}

module.exports = Sorteo;
