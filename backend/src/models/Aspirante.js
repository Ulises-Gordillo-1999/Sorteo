const db = require("../../database/db");

class Aspirante {
  // 📌 Contar aspirantes registrados
  static contarAspirantes(callback) {
    const sql = `SELECT COUNT(*) AS total FROM aspirantes`;
    db.get(sql, [], (err, row) => {
      callback(err, row ? row.total : 0);
    });
  }

  // 📌 Agregar nuevo aspirante con datos completos
  static agregar(aspirante, callback) {
    this.contarAspirantes((err, total) => {
      //console.log("Estamos en models",aspirante); // Para depuración
      //console.log("Fecha de nacimiento recibida:", aspirante.fecha_nacimiento); // Para depuración
      if (err) return callback(err, null);
      if (total >= 250) return callback(new Error("Se alcanzó el límite de 250 aspirantes"), null);
      const sql = `INSERT INTO aspirantes 
          (correo, apellido, nombre, dni, fecha_nacimiento, apellido_tutor, nombre_tutor, dni_tutor, telefono_tutor) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      db.run(
        sql,
        [
          aspirante.correo,
          aspirante.apellido,
          aspirante.nombre,
          aspirante.dni,
          aspirante.fecha_nacimiento,
          aspirante.apellido_tutor,
          aspirante.nombre_tutor,
          aspirante.dni_tutor,
          aspirante.telefono_tutor
        ],
        function (err) {
          if (err) {
            if (err.message.includes("UNIQUE constraint failed")) {
              return callback(new Error("Este DNI ya está registrado"), null);
            }
            return callback(err, null);
          }
          callback(null, this.lastID);
        }
      );
    });
  }

  // 📌 Obtener todos los aspirantes
  static obtenerTodos(callback) {
    const sql = `SELECT * FROM aspirantes ORDER BY fecha_registro DESC`;
    db.all(sql, [], callback);
  }
}

module.exports = Aspirante;

/**
 ✅ Implementación de Restricciones
✔ Límite de 250 aspirantes: Antes de agregar un nuevo aspirante, el sistema cuenta los registros existentes y bloquea nuevas inscripciones si se supera el límite.
✔ DNI único: Se usa UNIQUE en la base de datos y se captura el error para mostrar un mensaje claro si alguien intenta registrar un DNI repetido.


 */