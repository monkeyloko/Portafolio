import React from 'react';
import "./Home.css"; 
import avatar from "./avatar.png"

const obj = {
  id: "perro",
  nombre: ["Uriel Matias", "Tom Hanks"],
  apellido: "Brad Pitt",
  link: "linkalgithub",
}
const Home = () => {

    return (
      <div className="home">
        <div class="card">
    <p class="heading">
      Mi portafolio
    </p>
   <p>
      Hecho por
    </p>
   <p>Santiago Doff
  </p></div>
      </div>
    );
  };
  


export default Home;
