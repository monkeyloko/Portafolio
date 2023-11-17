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
      <>      
      <div className="home">
        <div class="card">
          <h1 class="heading">
            Santiago Doff
          </h1>
          <p class="subheading">Desarrollador Front-end</p>
        </div>
      </div>
      <div className='home2' ></div>
      <div className='home3' ></div>
      </>

    );
  };
  
export default Home;
