import React, {useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const RegisterReactBootstrap = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
  

   
        const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
    
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    form.reset();
                    navigate('/');
                })
                .catch(error => console.error(error))
    
        }

   

    
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register !!!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p><small>Already have an account? Please <Link to='/login'>Log in</Link></small></p>
        </div>
    );
};

export default RegisterReactBootstrap;