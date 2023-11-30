import "./Listado.css";
import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const Listado = () => {
  const [viviendas, setViviendas] = useState([]);
  const [viviendasFiltradas, setViviendasFiltradas] = useState([]);
  const [viviendaSeleccionada, setViviendaSeleccionada] = useState(null);
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  let pepe =[];
  const [formData, setFormData] = useState({
    direccion: "",
    barrio: "",
    tipoVivienda: "",
    metrosCuadradosTotales: "",
    metrosCuadradosCubierta: "",
    luminosidad: "",
    banios: "",
    cocheras: "",
    ambientes: "",
  });
  

  useEffect(() => {
    axios.get("http://localhost:5000/Vivienda").then((res) => {
      console.log(res.data);
      pepe = res.data;
      setViviendas(res.data);
      setViviendasFiltradas(res.data);
      
    });
  }, []);

  const handleEditar = (vivienda) => {
    console.log(vivienda);
    //setFormularioVisible(!formularioVisible);
    navigate('/EditarVivienda/' + vivienda.Id);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));

    const viviendasFiltradas = viviendas.filter((vivienda) =>
      vivienda.Barrio.toLowerCase().includes(inputValue.toLowerCase())
      );
      console.log(viviendasFiltradas);
    // Actualizar el estado con las viviendas filtradas
    setViviendas(viviendasFiltradas);


  };

  const editarVivienda = async (formData) => {
  
    let url = 'http://localhost:5000/Vivienda/';
    return axios.put(url,formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editarVivienda(formData).then(() => {
      navigate('/Viviendas');
    });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
    
  };
  const filtrarPorBarrio = (barrio) => {
    const viviendasFiltradas = viviendas.filter((vivienda) =>
      vivienda.Barrio.toLowerCase().includes(barrio.toLowerCase())
    );
    // Actualizar el estado con las viviendas filtradas
    //console.log(viviendasFiltradas.length);
    setViviendasFiltradas(viviendasFiltradas);
  };

 
  return (
    <div className="card-container">
       <div>
      {/* Input para el filtro de barrio */}
      <input
        type="text"
        onChange={(e) => filtrarPorBarrio(e.target.value)}
        placeholder="Filtrar por barrio..."
      />


    </div>
      {viviendasFiltradas.map((viv, index) => (
        <div className="card-container" key={index}>
            <Card className="card">
              <div className="card-content">
                <Card.Title className="card-title">{viv.Direccion}</Card.Title>
                <Card.Text className="card-text">Descripcion: {viv.Descripcion}</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Dirección: {viv.Direccion}</ListGroup.Item>
                  <ListGroup.Item>Barrio: {viv.Barrio}</ListGroup.Item>
                  <ListGroup.Item>Tipo de Vivienda: {viv.TipoVivienda}</ListGroup.Item>
                  <ListGroup.Item>
                    Metros Cuadrados Totales: {viv.MetrosCuadradosTotales}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Metros Cuadrados Cubierta: {viv.MetrosCuadradosCubierta}
                  </ListGroup.Item>
                  <ListGroup.Item>Luminosidad: {viv.Luminosidad}</ListGroup.Item>
                  <ListGroup.Item>Baños: {viv.Baños}</ListGroup.Item>
                  <ListGroup.Item>Cocheras: {viv.Cocheras}</ListGroup.Item>
                  <ListGroup.Item>Ambientes: {viv.Ambientes}</ListGroup.Item>
                </ListGroup>
                <button onClick={() => handleEditar(viv)}>Editar</button>
              </div>
            </Card>
          
        </div>
      ))}
    </div>
  );
};

export default Listado;