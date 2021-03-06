import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Main = () => {
    return (
        // TODO: Rewrite as react-bootstrap
        // <div className="text-white text-center d-flex align-items-center min-vh-100" style={{background: "black"}}>
        //     <Container>
        //     <Row>
        //         <Col>
        //         <h1>Aliaksei Chareshneu</h1>
        //         <h3>Developer, experimenter, storyteller</h3>
        //         <p className="lead">
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
        <div className="container-fluid" style={{position: "absolute", "z-index": "2"}}>
		<div id="welcome-message" className="text-center">
		
			{/* <h1 className="em1" style="color: blue">
				TODO: Technology icons go under the welcome message!
			</h1> */}
			<h1 className="em1">
				This is an em1 text
			</h1>
			<h2 className="em2">
				This is an em2 text
			</h2>
			<h3 className="em3">
				This is an em3 text
			</h3>
			<div className="row m-3">
				<div className="col">
					<button className="btn btn-dark">
						This is #1 button
					</button>
					<button className="btn btn-secondary">
						This is #2 button
					</button>
					<button className="btn btn-primary">
						This is #3 button
					</button>
				</div>
			</div>
			<div className="row m-3">
				<div className="col">
					<a href="#">
						This is a regular link
					</a>
				</div>
			</div>
			<div className="row m-3">
				<div className="col">
					<a href="#" className="nav-btn">
						This is a 'nav' link
					</a>
				</div>
			</div>
			<div className="row m-3">
				<div className="col">
					<p>
						Some text
					</p>
				</div>
			</div>
		</div>
	</div>


    )
}

export default Main