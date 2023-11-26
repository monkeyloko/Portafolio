import React from 'react';
import { Link } from 'react-router-dom';
import './Creaciones.css';
import { useCreacionesContext } from '../contextState';

const Creaciones = () => {
    const { creaciones } = useCreacionesContext();

    // Verificar si creaciones es un array antes de mapearlo
    if (!Array.isArray(creaciones)) {
        console.error('Los datos de creaciones no son un array:', creaciones);
        return null; // O algún componente de carga o mensaje de error
    }

    return (
        <div className='bodyCreaciones'>
            <h1>Creaciones</h1>
            <div className="title-divider"></div>
            <div className="creaciones-row">
                {creaciones.map((creacion) => (
                    <Link key={creacion.id} to={`/creaciones/detalle/${creacion.id}`} className="creaciones-column">
                        <div className="creaciones-column">
                            <div className="creaciones-card">
                                <img src={creacion.foto} alt={creacion.titulo} className="creaciones-card-img" />
                                <div className="creaciones-card-content">
                                    <h2 className="creaciones-card-title">{creacion.titulo}</h2>
                                    <p className="creaciones-card-description">{creacion.descripcion}</p>
                                    <a href={creacion.link} target="_blank" rel="noopener noreferrer" className="creaciones-card-link">
                                        Ver en GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Creaciones;
