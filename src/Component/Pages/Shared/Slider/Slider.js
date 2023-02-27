import Carousel from 'react-bootstrap/Carousel';

import React from 'react';

const Slider = () => {
    return (
        <div>
             <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Czpq6pK/javascript.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/wWNgmqm/Ai.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Artificial Intelligence</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/MV5tZ3C/java.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Slider;