import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportarExcel = ({ datos}) => {
  const exportar = () => {
    if (!datos || datos.length === 0) {
      alert("No hay datos para exportar");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(datos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sorteados");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(blob, `sorteo_2025.xlsx`);
  };

  return (
    <button className="btn btn-success" onClick={exportar}>
      Exportar a Excel
    </button>
  );
};

export default ExportarExcel;
