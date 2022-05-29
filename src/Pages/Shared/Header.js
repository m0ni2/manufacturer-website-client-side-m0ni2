import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={Logo} className='header-img' alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/'>About</Nav.Link>
                            <Nav.Link as={Link} to='/'>Checkout</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;