import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contsxt/Authprovider';

const Register = () => {

const {createUser}=useContext(AuthContext)


    const handleregister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photourl=form.photo_url.value;
        console.log(name);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error('error',error);
        })

    }


    return (
       
       <Form   onSubmit={handleregister} style={{color:'whitesmoke'}}>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label >Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label >Photo url</Form.Label>
        <Form.Control name='photo_url' type="text" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
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

export default Register;