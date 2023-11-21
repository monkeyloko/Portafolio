import React from 'react';
import "./Home.css"; 
import avatar from "./avatar.png"
import { useCreacionesContext } from '../contextState';

const Home = () => {
  const { creaciones } = useCreacionesContext();
  const primerasTresCreaciones = creaciones.slice(0, 3);


  return (
    <>
      <div className="home">
        <div className="card">
          <h1 className="heading">
            {console.log(creaciones)}
            Santiago Doff
          </h1>
          <p className="subheading">Desarrollador Front-end</p>
        </div>
      </div>
      <div className='home2'>
        {primerasTresCreaciones.map((creacion) => (
          <div key={creacion.titulo} className="card">
            <img src={creacion.foto} alt={creacion.titulo} />
            <h2>{creacion.titulo}</h2>
            <p>{creacion.descripcion}</p>
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
