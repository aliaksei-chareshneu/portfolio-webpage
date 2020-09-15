import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const TopNavigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo goes here</Navbar.Brand>
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
        </Navbar>
    )
}

export default TopNavigation

