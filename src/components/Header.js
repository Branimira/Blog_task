import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';



function Header() {
   return (
   <>
   <Navbar id='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
         <Navbar.Brand href="#home"><img id='logo' 
         src='https://img.favpng.com/0/8/4/world-icon-travel-icon-airport-icon-png-favpng-2TSQUTA0P4R1GWWnn0vuzMXX0.jpg' alt='logo'/></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link className='header_links' to='/'>Home</Link> 
            <Link className='header_links' to='about'>About</Link> 
            <Link className='header_links'to='contact'>Contact</Link>
         </Nav>
         <Nav>
            <Link to='login' className='header_links'>Login</Link> 
            <Link eventKey={2} to='register' className='header_links'>Registration</Link>
         </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>

</>
   );
}


export default Header;