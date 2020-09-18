import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Main = () => {
    return (
        <div className="bg-dark text-white d-flex align-items-center min-vh-100">
            <Container>
            <Row>
                <Col>
                <p className="lead">
                    Hi there! I'm Aliaksei, web developer, PhD student in bioinformatics, freelancer, researcher, musician, and a storyteller.
                    I like to help people out, and I firmly believe that good does always triumph over evil.
                </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='primary' block>Read CV</Button>
                </Col>
                <Col>
                    <Button variant='success' block>Have a look on projects</Button>
                </Col>
                <Col>
                    <Button variant='warning' block>Something else</Button>
                </Col>
            </Row>
        </Container>

        </div>
        )
}

export default Main