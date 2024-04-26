import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <h1>Mundo Visual</h1>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Inicio
          </Nav.Link>
          <Nav.Link to="/category/camaras" as={NavLink}>
            Camaras
          </Nav.Link>
          <Nav.Link to="/category/celulares" as={NavLink}>
            Celulares
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
