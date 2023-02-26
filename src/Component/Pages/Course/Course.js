import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Course = ({course}) => {

    const {name,id,fee,thumb,student}=course;


    return (
<Card className='m-1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text>Total Fee: {fee}</Card.Text>
        <Link to={`/course/${id}`}>
        {/* <Card.Link variant="secondary">${fee}</Card.Link> */}
        <Button variant="secondary">Enroll course</Button>
        </Link>
      
    
      </Card.Body>
    </Card>
    );
};

export default Course;