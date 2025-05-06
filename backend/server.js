/*
📌 Dependencias clave:
    Express (para la API)✔️
    CORS (para permitir conexión con el frontend)✔️
    Multer (para subir archivos Excel)✔️
    xlsx (para procesar archivos Excel)✔️
    jsonwebtoken (para autenticación si es necesario)✔️
    nodemailer (para enviar correos)✔️
    pdfkit (para generar PDFs)✔️
 📌 Principales funcionalidades del backend: ✔️ Recibir y procesar listas de alumnos (manual o desde Excel)
✔️ Realizar el sorteo de manera aleatoria (algoritmo Fisher-Yates)
✔️ Exportar resultados en Excel/PDF
✔️ Enviar resultados por email
✔️ Opcional: Guardar sorteos en una BD (SQLite/Firebase)

 */
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const aspirantesRoutes = require("./src/routes/aspirantes");
const sorteoRoutes = require("./src/routes/sorteo");  // 📌 Importamos la ruta del sorteo

const app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json())

app.use("/aspirantes", aspirantesRoutes);
app.use("/sorteo", sorteoRoutes);  // 📌 Usamos la ruta para realizar sorteos


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

