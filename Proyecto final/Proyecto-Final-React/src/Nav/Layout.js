import { Button, Container, Form, Nav, Navbar, NavItem } from "react-bootstrap";
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
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Viviendas">Viviendas</Nav.Link>
                        <Nav.Link as={Link} to="/Form">Form</Nav.Link>
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