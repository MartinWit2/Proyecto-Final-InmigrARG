import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listado from '../Listado/Listado';
import FormVivienda from '../publicarViviendaForm/FormVivienda';
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Layout from '../Nav/Layout';
import logo from '../logo.svg';
import './App.css';

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
        </Routes>
        <footer className="app-footer">
          © {new Date().getFullYear()} InmigrARG
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
