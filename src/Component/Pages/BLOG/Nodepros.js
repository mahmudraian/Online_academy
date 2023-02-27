import React from 'react';
import Card from 'react-bootstrap/Card';

const Nodepros = () => {
    return (
        <div>
               <Card className='mb-5' style={{ width: '18rem' ,color:'black'}}>
      <Card.Title>Why Node js?</Card.Title>
      <Card.Text>
        
 Node.js is built on top of the V8 JavaScript engine, which is the same engine used by Google Chrome. This means that developers can write server-side applications in JavaScript, which can improve productivity and reduce the learning curve.Node.js uses an event-driven, non-blocking I/O model, which means that it can handle a large number of concurrent connections with minimal overhead.Node.js is designed to be scalable and can handle large amounts of traffic and data.
      </Card.Text>
    </Card>

        </div>
    );
};

export default Nodepros;