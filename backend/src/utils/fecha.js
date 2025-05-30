// utils/fechas.js
function obtenerFechaArgentina() {
  const ahora = new Date();
  ahora.setHours(ahora.getHours() - 3); // UTC-3
  return ahora.toISOString().slice(0, 19).replace("T", " ");
}

module.exports = { obtenerFechaArgentina };
