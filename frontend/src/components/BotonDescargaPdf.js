import axios from 'axios';

const DescargarPDFs = () => {

  const descargarPDF = async (tipo) => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`/pdf/${tipo}`, {
        responseType: 'blob',
        headers: { Authorization: `Bearer ${token}` }
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${tipo}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert('Error al descargar PDF');
    }
  };

  return (
    <div>
      <button onClick={() => descargarPDF('aspirantes')}>Descargar PDF Aspirantes</button>
      <button onClick={() => descargarPDF('sorteados')}>Descargar PDF Sorteados</button>
    </div>
  );
};

export default DescargarPDFs;
