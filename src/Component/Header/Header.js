import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contsxt/Authprovider';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {

  const {user,logout}=useContext(AuthContext);
  console.log(user?.displayName);

 
const handleLogout=()=>{
logout()
.then()
.catch()
}


    return (
        <Navbar className='mb-5 me-10' variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
                Course Fire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Link to='/'><Nav.Link href="#pricing">Home </Nav.Link></Link> 
             <Link to='/blog'><Nav.Link href="#pricing">Blog </Nav.Link></Link> 
             <Link   to='/login'><Nav.Link href="#pricing">Login</Nav.Link></Link> 
             <Link to='/register'><Nav.Link href="#pricing">Register</Nav.Link></Link> 
              
             </Nav>
           
          
            <Nav className="d-flex justify-content-between">
            <Link className=''to='/'><Nav.Link href="#pricing">Home</Nav.Link></Link> 
            <Link className='me-5' to='/'><Nav.Link  bg='light' href="#pricing">{user?.displayName}</Nav.Link></Link> 
            {user? 
            <><Image className='me-2' style={{width:'40px'}} roundedCircle src={user?.photoURL}></Image>
            <Button  onClick={handleLogout} variant="outline-danger">Logout</Button>
            </>
            :<FaUser style={{color:'whitesmoke', width:'150px'}}></FaUser>}
          
           
            
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>



    );
};

export default Header;