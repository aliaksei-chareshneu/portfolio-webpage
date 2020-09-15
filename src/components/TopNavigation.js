import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const TopNavigation = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo goes here</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#cv">CV</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar.Collapse>

        </Navbar>
    )
}

export default TopNavigation

