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
const path = require("path");
require('dotenv').config();
const bodyParser = require('body-parser')
const aspirantesRoutes = require("./src/routes/aspirantesInscripcion");
const aspirantes_CRUD_Routes = require("./src/routes/aspirantes_CRUD"); // 📌 Importamos la ruta para listar aspirantes
const sorteoRoutes = require("./src/routes/sorteo");  // 📌 Importamos la ruta del sorteo
const authRoutes = require('./src/routes/auth');
const authMiddleware = require('./src/middleware/auth');

//console.log("PROBANDO CLAVE", process.env.JWT_SECRET); // Verificamos la clave secreta del JWT

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())




//rutas publicas
app.use('/auth', authRoutes); // 📌 Usamos la ruta para autenticar usuarios
app.use("/inscripcion", aspirantesRoutes);
app.use('/uploads', express.static('uploads'));


//rutas protegidas
app.use('/aspirantes', authMiddleware, aspirantes_CRUD_Routes); // 📌 Usamos la ruta para listar aspirantes
app.use("/sorteo", authMiddleware ,sorteoRoutes);  // 📌 Usamos la ruta para realizar sorteos

// ===== Servir el build de React =====
app.use(express.static(path.join(__dirname, "/public/build")));

// Fallback para React Router (SIEMPRE al final)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/build", "index.html"));
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

