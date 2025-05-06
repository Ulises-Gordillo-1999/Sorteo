const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/sorteo.db", (err) => {
    if (err) {
        console.error("Error al abrir la base de datos:", err.message);
    } else {
        console.log("Base de datos conectada.");
    }
});

// 📌 Crear tabla de aspirantes si no existe
db.run(
    /*`CREATE TABLE IF NOT EXISTS aspirantes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        dni TEXT UNIQUE NOT NULL,
        fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP
    )`,*/
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
