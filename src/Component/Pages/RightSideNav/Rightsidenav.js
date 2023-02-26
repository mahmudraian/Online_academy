import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';


const Rightsidenav = () => {
    return (
        <div >

        <div className='d-grid'>
            <>
         <Button variant="outline-primary">Google Login</Button>
            </>
          <Button variant="outline-secondary">Github Login</Button>
        </div>

         <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
        </div>
    );
};

export default Rightsidenav;