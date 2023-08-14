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

function Layout() {
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
              <Nav.Link as={Link} to="/Form">Form</Nav.Link>
              <NavDropdown title="Usuario" id="NavBarDown"> 
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;
