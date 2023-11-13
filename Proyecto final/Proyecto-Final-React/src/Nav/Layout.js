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

function Layout() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
        navigate('/Login');
    
  };
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
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/Viviendas">Viviendas</Nav.Link>
              <Nav.Link as={Link} to="/Form">Publicar Vivienda</Nav.Link>
              <NavDropdown title="Usuario" id="NavBarDown"> 
                <NavDropdown.Item href="/Perfil">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="/Login">Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <Button variant="warning" onClick={handleLogin}>Iniciar Sesión</Button>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;
