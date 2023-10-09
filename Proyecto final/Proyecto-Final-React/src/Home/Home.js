import React from 'react';
import './Home.css';
function Home(){
    return(
        <div className="intro-page">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="intro-text">
            <h1>InmigrARG</h1>
            <h2>¿Quienes somos?</h2>
            <p>Somos una empresa que busca brindar asistencia y asesoramiento a inmigrantes para poder establecerse y adaptarse dentro de Argentina cumpliendo con las gestiones necesarias para garantizar su bienestar. Nuestro objetivo es ser el servicio que toda persona considere como primera opción al tomar la decisión de emigrar.</p>
          </div>
        </div>
      </div>
    );
}
export default Home;