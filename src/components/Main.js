import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Resume from "../assets/Abraham-Smith-Resume.pdf";
import Footer from "./Footer.js"

function Main() {
    const [current, setCurrent] = useState(About);

  return (
    <>
        <Navbar variant='dark' expand="lg" className='navibar p-0'>
          <Container className='navi-container'>
              <Navbar.Brand className='abraham'>Abraham Smith</Navbar.Brand>
              <Navbar.Toggle className='menu-button border-0 px-5' aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link onClick={() => setCurrent(About)} href="#home">About Me</Nav.Link>
                  <Nav.Link onClick={() => setCurrent(Portfolio)} href="#portfolio">Porftolio</Nav.Link>
                  <Nav.Link onClick={() => setCurrent(Contact)} href="#contact">Contact</Nav.Link>
                  <Nav.Link href={Resume} target={"_blank"}>Resume</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>{current}</main>

        <div className='d-flex justify-content-center p-5'>
          <hr className='text-white w-50'  />
        </div>

        <Footer />
    </>
  );
}

export default Main;