import Listado from "../Listado/Listado";
import FormVivienda from "../publicarViviendaForm/FormVivienda";
import axios from "axios";
import logo from "../logo.svg";
import "./App.css";
import Layout from "../Nav/Layout";
 
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="fondo">
    <BrowserRouter>
    <Layout></Layout>
      <Routes>
        <Route path="/Viviendas"  element= {<Listado></Listado>}></Route>
        <Route path="/Form" index element={<FormVivienda></FormVivienda>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
      
      
  );
}

export default App;
