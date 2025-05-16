import React, { useState, useEffect } from "react";

const AspiranteForm = ({ aspirante, onSubmit, modo }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        correo: "",
        fecha_nacimiento: "",
        apellido_tutor: "",
        nombre_tutor: "",
        dni_tutor: "",
        telefono_tutor: ""
    });

    useEffect(() => {
        if (aspirante) {
            setFormData(aspirante);
        }
    }, [aspirante]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                {Object.entries(formData).map(([key, value]) => (
                    <div className="mb-3 col-md-6" key={key}>
                        <label className="form-label">{key.replace("_", " ")}</label>
                        <input
                            type="text"
                            className="form-control"
                            name={key}
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </div>
            <button type="submit" className="btn btn-success">
                {modo === 'editar' ? 'Actualizar' : 'Crear'}
            </button>
        </form>
    );
};

export default AspiranteForm;