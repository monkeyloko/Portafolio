import React from 'react';
import './Creaciones.css';
import { useCreacionesContext } from '../contextState';

const Creaciones = () => {
    const { creaciones, favoritos, toggleFavorito } = useCreacionesContext();

    const isFavorito = (titulo) => favoritos.includes(titulo);

    return (
        <div className='bodyCreaciones'>
            <h1>Creaciones</h1>
            <div className="title-divider"></div>
            <div className="creaciones-row">
                {creaciones.map((creacion) => (
                    <div key={creacion.titulo} className="creaciones-column">
                        <div className="creaciones-card">
                            <img src={creacion.foto} alt={creacion.titulo} className="creaciones-card-img" />
                            <div className="creaciones-card-content">
                                <h2 className="creaciones-card-title">{creacion.titulo}</h2>
                                <p className="creaciones-card-description">{creacion.descripcion}</p>
                                <a href={creacion.link} target="_blank" rel="noopener noreferrer" className="creaciones-card-link">
                                    Ver en GitHub
                                </a>
                                <button onClick={() => toggleFavorito(creacion.titulo)}>
                                    {isFavorito(creacion.titulo) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Creaciones;
