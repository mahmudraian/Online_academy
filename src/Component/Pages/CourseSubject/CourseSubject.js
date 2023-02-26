import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseSubject = () => {
const subject=useLoaderData();
const {name,id,fee,thumb,student}=subject;


    return (
        <>
        <Card>
          <Card.Img variant="top" src={thumb} />
          <Card.Body>
            <Card.Text>
              {name} <>Total Seat:{student} Course fee: {fee}</>
            </Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </>
    );
};

export default CourseSubject;