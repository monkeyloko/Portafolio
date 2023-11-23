import React from 'react';
import { useCreacionesContext } from '../contextState';
import './Favoritos.css';

const Favoritos = () => {
  const { creaciones, favoritos } = useCreacionesContext();

  // Filtra las creaciones que son favoritas
  const favoritosData = creaciones.filter((creacion) => favoritos.includes(creacion.titulo));

  return (
    <div className="favoritos-container">
      <h1 className="favoritos-title">Mis Favoritos</h1>
      {favoritosData.length === 0 ? (
        <p className="favoritos-empty">No tienes favoritos por el momento.</p>
      ) : (
        <div className="creaciones-grid">
          {favoritosData.map((creacion) => (
            <div key={creacion.titulo} className="creacion-favorita">
              <img src={creacion.foto} alt={creacion.titulo} className="creacion-favorita-img" />
              <div className="creacion-favorita-content">
                <h2 className="creacion-favorita-title">{creacion.titulo}</h2>
                <p className="creacion-favorita-description">{creacion.descripcion}</p>
                <a href={creacion.link} target="_blank" rel="noopener noreferrer" className="creacion-favorita-link">
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
