import "./Listado.css";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Listado = ({ Vivienda }) => {
 
  if(Array.isArray(Vivienda)){
    console.log("entre al if")
     return Vivienda.map((viv) => {
      console.log("map");
      const imagen = viv.imagen
      const direccion = viv.Direccion;
      const desc = viv.Descripcion;
      const m2=viv.MetrosCuadradosTotales;
      const cocheras = viv.Cocheras;
      const ambientes = viv.Ambientes;
      const barrio = viv.Barrio;
      const m2cubierta = viv.MetrosCuadradosCubierta;
      const luminosidad = viv.Luminosidad;
      const baños = viv.Baños;
      const tipovivienda = viv.tipoVivienda;
      const descripcion = viv.Descripcion;
      
      console.log(baños);
      
    return(
      
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title>{direccion}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Dirección: {direccion}</ListGroup.Item>
      <ListGroup.Item>Barrio: {barrio}</ListGroup.Item>
      <ListGroup.Item>Tipo de Vivienda: {tipovivienda}</ListGroup.Item>
      <ListGroup.Item>Metros Cuadrados Totales: {m2}</ListGroup.Item>
        <ListGroup.Item>Metros Cuadrados Cubierta: {m2cubierta}</ListGroup.Item>
        <ListGroup.Item>Luminosidad: {luminosidad}</ListGroup.Item>
        <ListGroup.Item>Baños: {baños}</ListGroup.Item>
        <ListGroup.Item>Cocheras: {cocheras}</ListGroup.Item>
        <ListGroup.Item>Ambientes: {ambientes}</ListGroup.Item>
        <ListGroup.Item>Descripcion: {descripcion}</ListGroup.Item>
        <ListGroup.Item>Imagen: {imagen}</ListGroup.Item>
      </ListGroup>
    </Card>
    )
  });
  }
  return null;
};

export default Listado;
