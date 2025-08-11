const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database("./database/sorteo.db", (err) => {
  if (err) {
    console.error("Error al abrir la base de datos:", err.message);
  } else {
    console.log("Base de datos conectada.");
    inicializar();
  }
});

function inicializar() {
  // --- Crear tablas con el esquema actualizado ---
  db.run(
    `CREATE TABLE IF NOT EXISTS aspirantes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      correo TEXT NOT NULL,
      apellido TEXT NOT NULL,
      nombre TEXT NOT NULL,
      dni TEXT UNIQUE NOT NULL,
      fecha_nacimiento TEXT NOT NULL,
      apellido_tutor TEXT NOT NULL,
      nombre_tutor TEXT NOT NULL,
      dni_tutor TEXT NOT NULL,
      telefono_tutor TEXT NOT NULL,
      dni_path TEXT,                  
      fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
      if (err) console.error("Error creando la tabla aspirantes:", err.message);
      else ensureColumn("aspirantes", "dni_path", "TEXT"); // ✅ migración si falta
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS sorteos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fecha_sorteo TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
      if (err) console.error("Error creando la tabla sorteos:", err.message);
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS sorteados (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sorteo_id INTEGER NOT NULL,
      aspirante_id INTEGER NOT NULL,
      tipo TEXT,                                   -- ✅ incluir tipo en schema nuevo
      FOREIGN KEY (sorteo_id) REFERENCES sorteos(id),
      FOREIGN KEY (aspirante_id) REFERENCES aspirantes(id)
    )`,
    (err) => {
      if (err) console.error("Error creando la tabla sorteados:", err.message);
      else ensureColumn("sorteados", "tipo", "TEXT"); // ✅ migración si falta
    }
  );
}

/**
 * Agrega una columna si no existe (migración suave)
 * @param {string} table nombre de la tabla
 * @param {string} column nombre de la columna a verificar/agregar
 * @param {string} type tipo SQL de la columna (por ejemplo: "TEXT", "INTEGER")
 */
function ensureColumn(table, column, type) {
  db.all(`PRAGMA table_info(${table})`, (err, rows) => {
    if (err) {
      console.error(`PRAGMA error en ${table}:`, err.message);
      return;
    }
    const existe = rows.some((r) => r.name === column);
    if (!existe) {
      const sql = `ALTER TABLE ${table} ADD COLUMN ${column} ${type}`;
      db.run(sql, (e) => {
        if (e) console.error(`Error agregando columna ${column} en ${table}:`, e.message);
        else console.log(`Columna ${column} agregada a ${table}.`);
      });
    }
  });
}

module.exports = db;


/*const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/sorteo.db", (err) => {
    if (err) {
        console.error("Error al abrir la base de datos:", err.message);
    } else {
        console.log("Base de datos conectada.");
    }
});

// 📌 Crear tabla de aspirantes si no existe
db.run(
    `CREATE TABLE IF NOT EXISTS aspirantes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        correo TEXT NOT NULL,
        apellido TEXT NOT NULL,
        nombre TEXT NOT NULL,
        dni TEXT UNIQUE NOT NULL,
        fecha_nacimiento TEXT NOT NULL,
        apellido_tutor TEXT NOT NULL,
        nombre_tutor TEXT NOT NULL,
        dni_tutor TEXT NOT NULL,
        telefono_tutor TEXT NOT NULL,
        fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) console.error("Error creando la tabla aspirantes:", err.message);
    }
);

// 📌 Nueva estructura para los sorteos
db.run(
    `CREATE TABLE IF NOT EXISTS sorteos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha_sorteo TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) console.error("Error creando la tabla sorteos:", err.message);
    }
);

// 📌 Nueva tabla para registrar los aspirantes sorteados
db.run(
    `CREATE TABLE IF NOT EXISTS sorteados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sorteo_id INTEGER NOT NULL,
        aspirante_id INTEGER NOT NULL,
        FOREIGN KEY (sorteo_id) REFERENCES sorteos(id),
        FOREIGN KEY (aspirante_id) REFERENCES aspirantes(id)
    )`,
    (err) => {
        if (err) console.error("Error creando la tabla sorteados:", err.message);
    }
);

module.exports = db;
*/