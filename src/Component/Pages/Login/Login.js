import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contsxt/Authprovider';


const Login = () => {
const {login}=useContext(AuthContext);
const navigate=useNavigate();

    const handlelogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
           
            
        })
        .catch(error=>{
            console.error('error',error);
        })
    }

    return (
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Login;