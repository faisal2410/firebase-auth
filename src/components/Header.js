import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {test, user, logOut } = useContext(AuthContext);
    console.log('context=========>', test.displayName);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="me-2">Home</Link>
            <Link to="/signin" className="me-2">Signin</Link>
            <Link to="/signup" className="me-2">Signup</Link>
            <Link to="/register" className="me-2">Register</Link>
            <Link to="/login" className="me-2">Login</Link>
            {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email ? 
                    <button onClick={handleSignOut} className="btn btn-sm">Log out</button>
                    : <Link to='/login'>
                        <button className='btn btn-sm'>Log In</button>
                    </Link>
                }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;