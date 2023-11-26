import React from "react";
import { useParams } from "react-router-dom";
import { useCreacionesContext } from '../contextState';
import './DetalleCreacion.css';

const DetalleCreacion = () => {
    const { creaciones, favoritos, añadirFav, borrarFav, isFavorite } = useCreacionesContext();
    const { id } = useParams();
    const creacion = creaciones.find(creacion => creacion.id === +id);

    if (!creacion) {
        return <p>Creación no encontrada {id}</p>;
    }

    const handleToggleFavorito = () => {
        if (isFavorite(creacion.id)) {
            borrarFav(creacion.id);
        } else {
            añadirFav(creacion.id);
        }
    };

    return (
        <div className="detalle-creacion">
            <img src={creacion.foto} alt={creacion.titulo} className="detalle-creacion-img" />
            <div className="detalle-creacion-content">
                <h1 className="detalle-creacion-title">{creacion.titulo}</h1>
                <p className="detalle-creacion-description">{creacion.descripcion}</p>
                <a href={creacion.link} target="_blank" rel="noopener noreferrer" className="detalle-creacion-link">
                    Ver en GitHub
                </a>
                <button onClick={handleToggleFavorito}>
                    {isFavorite(creacion.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                </button>
            </div>
        </div>
    );
}

export default DetalleCreacion;