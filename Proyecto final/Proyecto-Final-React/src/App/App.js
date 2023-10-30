import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listado from '../Listado/Listado';
import FormVivienda from '../publicarViviendaForm/FormVivienda';
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Layout from '../Nav/Layout';
import Home from '../Home/Home'
import logo from '../logo.svg';
import './App.css';
import Perfil from '../Perfil/Perfil';

function App() {

  return (
    <div className="fondo">
      <BrowserRouter>
        <Layout></Layout>
        <Routes>
          <Route path="/Viviendas" element={<Listado />} />
          <Route path="/Form" element={<FormVivienda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
