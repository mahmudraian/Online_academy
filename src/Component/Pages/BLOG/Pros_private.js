import React from 'react';
import Card from 'react-bootstrap/Card';

const Pros_private = () => {
    return (
        <div>
    <Card  className='mb-5' style={{ width: '18rem' ,color:'black'}}>
      <Card.Title>What is private route?</Card.Title>
      <Card.Text>
      A private route in a React application refers to a route that is accessible only to authenticated users. Private routes are commonly used in applications that require users to log in before accessing certain pages or functionalities.
      </Card.Text>
    </Card>

        </div>
    );
};

export default Pros_private;