# 🎓 Sistema de Sorteo para Nivel Inicial - Académicas

Sistema web para la gestión de sorteos de ingreso al Nivel Inicial, desarrollado para la Escuela Preuniversitaria de la **Universidad Nacional de Catamarca**.

---

## 📌 Descripción

Esta aplicación permite registrar aspirantes, realizar sorteos aleatorios de manera transparente y exportar los resultados. Está orientado a instituciones educativas que requieren procesos equitativos de selección.

---

## 🛠 Tecnologías utilizadas

### Backend
- Node.js
- Express.js
- SQLite
- JWT (autenticación)
- pdfkit (opcional para exportar en PDF)


### Frontend
- React.js
- Bootstrap
- Axios
- React Router
- xlsx (exportación a Excel)

---

## ⚙️ Requisitos previos

- Node.js v18 o superior
- npm
- SQLite3
- Git (opcional)

---

## 🚀 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/Ulises-Gordillo-1999/Sorteo.git
   ```

2. Instalá dependencias:

   En `backend/`:
   ```bash
   cd backend
   npm install
   ```

   En `frontend/`:
   ```bash
   cd ../frontend
   npm install
   ```

3. Ejecutá el backend:
   ```bash
   cd ../backend
   node server.js
   ```

4. Ejecutá el frontend:
   ```bash
   cd ../frontend
   npm start
   ```

---

## 🗂️ Estructura del proyecto

```
Sorteo/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── database/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── App.js
│
└── aspirantes_249.json (archivo de prueba)
```

---

## 🧩 Funcionalidades principales

- Registro único de aspirantes
- Validación por DNI
- Panel de administración protegido
- Sorteo aleatorio de aspirantes (titulares y suplentes)
- Exportación de resultados a Excel
- Edición y eliminación de aspirantes
- Historial de sorteos (en construcción)
- Interfaz moderna y responsiva

---

## 🧑‍💼 Autor

**Ulises Daniel Gordillo**  
Técnico en Informática, Universidad Nacional de Catamarca

---

## 🏫 Institución

**Universidad Nacional de Catamarca**  
Escuela Preuniversitaria "Fray Mamerto Esquiú"

---

## 📄 Licencia

Este proyecto se distribuye sin fines comerciales. Para uso institucional o académico.
