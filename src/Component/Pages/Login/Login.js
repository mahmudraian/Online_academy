import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contsxt/Authprovider';


const Login = () => {
const {login,seterror,showerror}=useContext(AuthContext);
const navigate=useNavigate();
const location=useLocation();

const from=location?.state?.from?.pathname||'/';
    const handlelogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true});
           
            
        })
        .catch(error=>{
            console.error('error',error);
            seterror(error.message);
        
        })
        console.log(showerror);
    }

    return (
      <div>
        <Form 
        onSubmit={handlelogin}
        style={{color:'whitesmoke'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {showerror ? <h5 style={{color:'whitesmoke'}}>{showerror}</h5>: ''}
      </div>
    );
};

export default Login;