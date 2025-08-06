// AnimacionSorteo.js
import { useEffect, useState } from "react";
import SorteoAnimado from "../components/SorteoAnimado";

export default function AnimacionSorteo() {
  const [seleccionados, setSeleccionados] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("seleccionados");
    console.log(data)
    if (data) {
      setSeleccionados(JSON.parse(data));
    } else {
      //window.location.href = "/"; // fallback si no hay datos
    }
  }, []);

  return (
    <div className="container mt-5">
      <SorteoAnimado
        seleccionados={seleccionados}
        onFinish={() => console.log("Animación finalizada")}
      />
    </div>
  );
}
