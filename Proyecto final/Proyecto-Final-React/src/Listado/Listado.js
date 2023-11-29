import "./Listado.css";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const Listado = () => {
  const [viviendas, setViviendas] = useState([]);
  const [viviendaSeleccionada, setViviendaSeleccionada] = useState(null);
  const [formularioVisible, setFormularioVisible] = useState(false);
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
    axios.get("http://localhost:5000/Vivienda/1").then((res) => {
      console.log(res.data);
      setViviendas(res.data);
    });
  }, []);

  const handleEditar = (vivienda) => {
    console.log(vivienda);
    setFormularioVisible(!formularioVisible);
    
  };
 /*
  <form onSubmit={handleSubmit}>
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          placeholder="Ingrese la dirección"
        />
      </label>

      <label>
        Barrio:
        <input
          type="text"
          name="barrio"
          value={formData.barrio}
          onChange={handleChange}
          placeholder="Ingrese el barrio"
        />
      </label>

      <label>
        Tipo de Vivienda:
        <input
          type="text"
          name="tipoVivienda"
          value={formData.tipoVivienda}
          onChange={handleChange}
          placeholder="Ingrese el tipo de vivienda"
        />
      </label>

      <label>
        Metros Cuadrados Totales:
        <input
          type="text"
          name="metrosCuadradosTotales"
          value={formData.metrosCuadradosTotales}
          onChange={handleChange}
          placeholder="Ingrese los metros cuadrados totales"
        />
      </label>

      <label>
        Metros Cuadrados Cubierta:
        <input
          type="text"
          name="metrosCuadradosCubierta"
          value={formData.metrosCuadradosCubierta}
          onChange={handleChange}
          placeholder="Ingrese los metros cuadrados cubiertos"
        />
      </label>

      <label>
        Luminosidad:
        <input
          type="text"
          name="luminosidad"
          value={formData.luminosidad}
          onChange={handleChange}
          placeholder="Ingrese la luminosidad"
        />
      </label>

      <label>
        Baños:
        <input
          type="text"
          name="banios"
          value={formData.banios}
          onChange={handleChange}
          placeholder="Ingrese la cantidad de baños"
        />
      </label>

      <label>
        Cocheras:
        <input
          type="text"
          name="cocheras"
          value={formData.cocheras}
          onChange={handleChange}
          placeholder="Ingrese la cantidad de cocheras"
        />
      </label>

      <label>
        Ambientes:
        <input
          type="text"
          name="ambientes"
          value={formData.ambientes}
          onChange={handleChange}
          placeholder="Ingrese la cantidad de ambientes"
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
 
 
 */
  return (
    <div className="card-container">
      {viviendas.map((viv, index) => (
        <div className="card-container" key={index}>
          {formularioVisible && viviendaSeleccionada && (
            <div>
                
                <button onClick={() => handleEditar(viv)}>Editar</button>

              {/* Renderiza un formulario de edición con la viviendaSeleccionada */}
              {/* Puedes pasar la viviendaSeleccionada como prop al formulario de edición */}
              {/* Por ejemplo, podrías usar un componente de formulario de edición */}
              {/* <EdicionForm vivienda={viviendaSeleccionada} /> */}
            </div>
          )}
          {!formularioVisible && (
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
          )}
        </div>
      ))}
    </div>
  );
};

export default Listado;