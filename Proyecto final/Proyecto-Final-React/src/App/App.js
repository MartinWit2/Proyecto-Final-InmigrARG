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
import EditarVivienda from '../EditarVivienda/EditarVivienda';
import { UserProvider } from '../User/UserContext';

function App() {

  return (
    <div className="fondo">
      <UserProvider>
        <BrowserRouter>
          <Layout></Layout>
          <Routes>
          <Route index path="/" element={<Home />} />

            <Route path="/Viviendas" element={<Listado />} />
            <Route path="/Form" element={<FormVivienda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/EditarVivienda/:s" element={<EditarVivienda />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
