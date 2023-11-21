import React from 'react';
import { useCreacionesContext } from '../contextState';

const Home = () => {
  const { creaciones } = useCreacionesContext();
  const primerasTresCreaciones = creaciones.slice(0, 3);

  return (
    <>
      <div className="home">
        <div className="cardTitulo">
          <h1 className="heading">
            Santiago Doff
          </h1>
          <p className="subheading">Desarrollador Front-end</p>
        </div>
      </div>
      <div className='home2'>
        <h1>Algunas de mis Creaciones</h1> {/* Encabezado para la sección de creaciones */}
        {primerasTresCreaciones.map((creacion) => (
          <div key={creacion.titulo} className="card">
            <img src={creacion.foto} alt={creacion.titulo} />
            <h2>{creacion.titulo}</h2>
            <p></p>
            <a href={creacion.link} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
      <div className='home3'></div>
    </>
  );
};

export default Home;
