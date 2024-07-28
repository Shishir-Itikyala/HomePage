import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../utils/logo.png';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="bg-gray-800 rounded-3xl"> {/* Apply blackish grey background */}
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="h-10 mr-3" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <div className="mx-3"><Nav.Link href="#home" className="text-light"><h3><b>Lorem</b></h3></Nav.Link></div>
              <div className="mx-3"><Nav.Link href="#features" className="text-light"><h3><b>Lorem</b></h3></Nav.Link></div>
              <div className="mx-3"><Nav.Link href="#pricing" className="text-light"><h3><b>Lorem</b></h3></Nav.Link></div>
              <div className="mx-3"><Nav.Link href="#contact" className="text-light"><h3><b>Lorem</b></h3></Nav.Link></div>
              <div className="mx-3"><Button variant="light">Lorem</Button></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
