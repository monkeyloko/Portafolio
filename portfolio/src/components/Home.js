import React from 'react';
import { useCreacionesContext } from '../contextState';
import './Home.css'

const Home = () => {
  const { creaciones } = useCreacionesContext();

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
        <h1>Algunas de mis Creaciones</h1>
        <div className='creacionesDiv'>
          {creaciones.map((creacion) => (
            <div key={creacion.titulo} className="card">
              <img src={creacion.foto} alt={creacion.titulo} />
              <div className="card-content">
                <h2>{creacion.titulo}</h2>
                <p>{creacion.descripcion}</p>
                <a href={creacion.link} target="_blank" rel="noopener noreferrer">
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}</div>
      </div>
      <div className='home3'></div>
    </>
  );
};

export default Home;
