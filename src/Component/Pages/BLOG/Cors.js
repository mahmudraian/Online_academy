import React from 'react';
import Card from 'react-bootstrap/Card';

const Cors = () => {
    return (
        <div>
               <Card className='mb-5' style={{ width: '18rem' ,color:'black'}}>
      <Card.Title>What is cors?</Card.Title>
      <Card.Text>
      CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to prevent a web page from making requests to a different domain or origin than the one that served the original page. CORS is a mechanism that enables web servers to explicitly allow cross-origin requests from a specific domain or set of domains.Without CORS, web applications would be vulnerable to attacks such as cross-site request forgery (CSRF), where a malicious website can submit unauthorized requests to another website on behalf of the user.
      </Card.Text>
    </Card>

        </div>
    );
};

export default Cors;