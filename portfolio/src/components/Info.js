import React from 'react';
import Divider from '@mui/material/Divider';

import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-content">
        <div className="info-left">
          <h1>Hola! soy Santiago Doff.</h1>
        </div>
        <div className="info-right">
          <p>
            ¡Bienvenido a mi página de información! Soy Santiago Doff, un apasionado desarrollador de
            software
            con experiencia en diversas tecnologías. Me encanta aprender y explorar nuevas soluciones
            creativas para los desafíos de desarrollo.
          </p>
        </div>

      </div>
      <div className="title-divider"></div>
      <div className='fotoContainer'>   <a href='linkedin.com'><img className='linkedinFoto' src='linkedin.png' /></a></div>
      <div className="title-divider"></div>
      <div className="tech-stack">
        <h2>Tecnologías y Lenguajes</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>C#</li>
          <li>MSSQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
