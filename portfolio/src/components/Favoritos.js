import React from 'react';
import { Link } from 'react-router-dom';
import { useCreacionesContext } from '../contextState';
import './Favoritos.css';

const Favoritos = () => {
  const { creaciones, favoritos } = useCreacionesContext();

  // Filtra las creaciones que son favoritas
  const favoritosData = creaciones.filter(creacion => favoritos.includes(creacion.id));

  return (
    <div className="favoritos-container">
      <h1 className="favoritos-title">Mis Favoritos</h1>
      {favoritosData.length > 0 ? (
        <div className="favoritos-list">
          {favoritosData.map((creacion) => (
            <Link key={creacion.id} to={`/creaciones/detalle/${creacion.id}`} className="creacion-favorita-link">
              <div className="creacion-favorita">
                <img src={creacion.foto} alt={creacion.titulo} className="creacion-favorita-img" />
                <div className="creacion-favorita-content">
                  <h2 className="creacion-favorita-title">{creacion.titulo}</h2>
                  <p className="creacion-favorita-description">{creacion.descripcion}</p>
                  <a href={creacion.link} target="_blank" rel="noopener noreferrer" className="creacion-favorita-link">
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="favoritos-empty">No tienes favoritos aún.</p>
      )}
    </div>
  );
};

export default Favoritos;
