import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const LandingMain = () => {
    return (
        // TODO: Rewrite as react-bootstrap
        // <div classNameName="text-white text-center d-flex align-items-center min-vh-100" style={{background: "black"}}>
        //     <Container>
        //     <Row>
        //         <Col>
        //         <h1>Aliaksei Chareshneu</h1>
        //         <h3>Developer, experimenter, storyteller</h3>
        //         <p classNameName="lead">
        //             Hi there! I'm Aliaksei, web developer, PhD student in bioinformatics, freelancer, researcher, musician, and a storyteller.
        //             I like to help people out, and I firmly believe that good does always triumph over evil.
        //         </p>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <Button variant='light' block>Read CV</Button>
        //         </Col>
        //         <Col>
        //             <Button variant='danger' block>Have a look on projects</Button>
        //         </Col>
        //         <Col>
        //             <Button variant='light' block>Something else</Button>
        //         </Col>
        //     </Row>
        // </Container>

        // </div>
        <main id="main-content">
            <div className="container-fluid">
                <h1>CV</h1>
            </div>
        </main>
    )
}

export default LandingMain