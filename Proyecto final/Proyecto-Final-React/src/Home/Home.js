import React from 'react';
import './Home.css';
function Home(){
    return(
        <div className="intro-page">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="intro-text">
            <h1>¡InmigrARG!</h1>
            <p>Este es un texto introductorio que puedes personalizar según tus necesidades. Puedes agregar más contenido aquí.</p>
          </div>
        </div>
      </div>
    );
}
export default Home;