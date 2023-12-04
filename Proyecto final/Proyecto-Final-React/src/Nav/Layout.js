import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Layout.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Layout() {
  const [inicioSesion, setInicioSesion] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('nombreUsuario'));
    storedData ? setInicioSesion(storedData) : setInicioSesion(null)
  }, []);


  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/Login');

  };

  const cerrarSesion = () => {
    localStorage.setItem('nombreUsuario', JSON.stringify( null));
    localStorage.setItem('IdUsuario', JSON.stringify( null));
  }


  return (
    <>
      <Navbar expand="lg" className="navBar1">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll ">
            <Nav
              className="me-auto my-2 my-lg-0 navLetras"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Viviendas">Viviendas</Nav.Link>
              <Nav.Link as={Link} to="/Form">Publicar Vivienda</Nav.Link>
              <NavDropdown title="Usuario" id="NavBarDown">
                <NavDropdown.Item href="/Login" onClick={()=>{ cerrarSesion() }}>Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {inicioSesion ? (
              <h6>Hola, {inicioSesion}</h6>
            ) : (
              <Button variant="warning" onClick={handleLogin}>
                Iniciar Sesión
              </Button>
            )}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;
