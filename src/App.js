import React from 'react'
import { Jumbotron, Container, Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'

const App = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
            <Jumbotron>
                <h1>Hi there!</h1>
            </Jumbotron>
            <Container>
                Container
            </Container>
        </div>
    )
}

export default App