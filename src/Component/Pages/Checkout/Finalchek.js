import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contsxt/Authprovider';
import { CheckContext } from './Chechcourse';

const Finalchek = () => {

    const {user,checked}=useContext(AuthContext);

    return (
        <div>
           <Card style={{ width:"100%" }}>
      <Card.Body>
        <Card.Title>Total Course</Card.Title>
        <Card.Subtitle className="mb-2 ">{checked?.name}</Card.Subtitle>
        <Card.Text>
          Student Name:{user?.displaName}<br></br>
          Total fee: {checked?.fee}
        </Card.Text>
        <div className='d-lg-flex d-sm-grid justify-content-between'>
       
        <Link ><Button variant="outline-warning">Make Payment!</Button></Link>
        <Link to='/' ><Button variant="outline-success">Back to home</Button></Link>
        </div>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default Finalchek;