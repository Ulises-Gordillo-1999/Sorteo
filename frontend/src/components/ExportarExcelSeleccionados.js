import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExportarExcel = ({ titulares, suplentes }) => {
  const exportar = () => {
    const wsTitulares = XLSX.utils.json_to_sheet(titulares);
    const wsSuplentes = XLSX.utils.json_to_sheet(suplentes);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsTitulares, 'Titulares');
    XLSX.utils.book_append_sheet(wb, wsSuplentes, 'Suplentes');

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'resultado_sorteo.xlsx');
  };

  return (
    <button onClick={exportar} className="btn btn-success">
      Exportar a Excel
    </button>
  );
};

export default ExportarExcel;
