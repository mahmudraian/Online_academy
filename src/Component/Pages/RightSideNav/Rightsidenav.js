import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import { AuthContext } from '../../../Contsxt/Authprovider';
import { Link, useLoaderData } from 'react-router-dom';
import Slider from '../Shared/Slider/Slider';


const Rightsidenav = () => {
    const {googlelogin}=useContext(AuthContext);

    const data= useLoaderData();
    console.log(data);

    const handleGoogle=()=>{
        googlelogin()
        .then(result=>{
          const user=result.user;
          console.log(user);    
      })
      .catch(error=>{
          console.error('error',error);
      })
    
      }
    



    return (
        <div >

        <div className='d-lg-grid d-sm-flex mb-4'>
            <>
         <Button className='mb-2' onClick={handleGoogle} variant="outline-primary">Google Login</Button>
            </>
          <Button className='mb-2'variant="outline-secondary">Github Login</Button>
        </div>
        <Slider ></Slider>
        <div className='d-grid mt-2 '>
        <Link   to='/coursedetails'><Button className='mb-2' style={{width:'260px',height:'50px'}}  variant="primary">Course Details</Button></Link>
        <Link><Button className='mb-2' style={{width:'260px',height:'50px'}}variant="primary">About us</Button></Link>
        <Link><Button className='mb-2' style={{width:'260px',height:'50px'}}variant="primary">Join our Offline Academy</Button></Link>
        <Link><Button className='mb-2' style={{width:'260px',height:'50px'}} variant="primary">Find us on map</Button></Link>
        <Link><Button className='mb-2' style={{width:'260px',height:'50px'}} variant="primary">Contact us</Button></Link>
        <Link><Button className='mb-2' style={{width:'260px',height:'50px'}} variant="primary">Learn More about creater</Button></Link>
        </div>
     
        </div>
    );
};

export default Rightsidenav;