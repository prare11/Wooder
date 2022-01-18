import React, { Component } from 'react'
import { Nav, Navbar, Container, Form } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect bg="light" variant="dark">
                <Container>
                <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> WOODER</Nav.Link>
                            <Nav.Link href="/"> Home</Nav.Link>
                            <Nav.Link href="/"> Products</Nav.Link>
                            <Nav.Link href="/"> About</Nav.Link>
                        </Nav>
                        <Form inline>
                            
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
