import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Resume from "../pages/resume";

function Main() {
    const [current, setCurrent] = useState(About);

  return (
    <>
        <Navbar bg='dark' variant='dark' expand="lg" className='navibar'>
        <Container>
            <Navbar.Brand href="">Abraham Smith</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={() => setCurrent(About)} href="#home">About Me</Nav.Link>
                <Nav.Link onClick={() => setCurrent(Portfolio)} href="#portfolio">Porftolio</Nav.Link>
                <Nav.Link onClick={() => setCurrent(Contact)} href="#contact">Contact</Nav.Link>
                <Nav.Link onClick={() => setCurrent(Resume)} href="#resume">Resume</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <main>{current}</main>
    </>
  );
}

export default Main;