import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseSubject = () => {
const subject=useLoaderData();
const {name,id,fee,thumb,student,short_dis,long_dis}=subject;


    return (
        < >
        <Card >
          <Card.Img variant="top" src={thumb} />
          <Card.Body>
            <Card.Text>
              {name} <>Total Seat:{student} Course fee: {fee}</>
            </Card.Text>
            <Card.Text>
              {short_dis}
              {long_dis}
            </Card.Text>
          </Card.Body>
        </Card>
        
      </>
    );
};

export default CourseSubject;