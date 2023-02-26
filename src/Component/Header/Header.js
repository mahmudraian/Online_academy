import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contsxt/Authprovider';

const Header = () => {

  const {user}=useContext(AuthContext);
    return (
        <Navbar className='mb-5' variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Link to='/'><Nav.Link href="#pricing">Home</Nav.Link></Link> 
             <Link to='/login'><Nav.Link href="#pricing">Login</Nav.Link></Link> 
             <Link to='/register'><Nav.Link href="#pricing">Register</Nav.Link></Link> 
              
             </Nav>
           
          
            <Nav className="d-flex justify-content-between">
            <Link className=''to='/'><Nav.Link href="#pricing">Home</Nav.Link></Link> 
            <Link className='me-5' to='/'><Nav.Link  bg='light' href="#pricing">{user?.displayName}</Nav.Link></Link> 
           
           
           
            
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>



    );
};

export default Header;