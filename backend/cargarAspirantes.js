const sqlite3 = require("sqlite3").verbose();
const db = require("./database/db"); // Asegúrate de que el nombre de la BD es correcto

function generarAspirantes(cantidad) {
  const aspirantes = [];
  for (let i = 1; i <= cantidad; i++) {
    aspirantes.push({
      correo: `aspirante${i}@mail.com`,
      apellido: `Apellido${i}`,
      nombre: `Nombre${i}`,
      dni: (40000000 + i).toString(), // DNI único
      fecha_nacimiento: `201${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
      apellido_tutor: `TutorApellido${i}`,
      nombre_tutor: `TutorNombre${i}`,
      dni_tutor: (20000000 + i).toString(),
      telefono_tutor: `38345${10000 + i}`,
    });
  }
  return aspirantes;
}

const aspirantes = generarAspirantes(245); // Ya tienes 5, generamos 245 más

const sql = `INSERT INTO aspirantes 
  (correo, apellido, nombre, dni, fecha_nacimiento, apellido_tutor, nombre_tutor, dni_tutor, telefono_tutor) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

db.serialize(() => {
  const stmt = db.prepare(sql);
  aspirantes.forEach((asp) => {
    stmt.run(
      asp.correo,
      asp.apellido,
      asp.nombre,
      asp.dni,
      asp.fecha_nacimiento,
      asp.apellido_tutor,
      asp.nombre_tutor,
      asp.dni_tutor,
      asp.telefono_tutor
    );
  });
  stmt.finalize(() => {
    console.log("Carga de aspirantes completada.");
    db.close();
  });
});
