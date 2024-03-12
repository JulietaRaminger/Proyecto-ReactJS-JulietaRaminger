import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Dena Diseño</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Decoración</Nav.Link>
          <Nav.Link href="#features">Niños</Nav.Link>
          <Nav.Link href="#pricing">Todo</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
