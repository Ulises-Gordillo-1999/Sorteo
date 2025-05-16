/*
Este componente:

Lee el ID de la URL

Busca los datos del aspirante

Renderiza AspiranteForm
*/

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/axiosConfig";
import AspiranteForm from "./AspiranteForm";

const AspiranteFormWrapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [aspirante, setAspirante] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/aspirantes");
                const encontrado = res.data.find(a => a.id === parseInt(id));
                setAspirante(encontrado);
            } catch (err) {
                console.error("Error al cargar aspirante", err);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (actualizado) => {
         console.log("Enviando:", actualizado);
        try {
            await api.put(`/aspirantes/${actualizado.id}`, actualizado);
            navigate('/admin/aspirantes');
        } catch (error) {
            console.error("Error al actualizar", error);
        }
    };

    return aspirante ? (
        <div className="card mt-3 p-3">
            <h4>Editar Aspirante ID: {aspirante.id}</h4>
            <AspiranteForm aspirante={aspirante} onSubmit={handleUpdate} modo="editar" />
        </div>
    ) : (
        <p>Cargando aspirante...</p>
    );
};

export default AspiranteFormWrapper;
