import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const LandingMain = () => {
    return (
        
		<main id="main-content" className="text-center vertical-center">
			<Container fluid style={{maxWidth: "700px"}}>
				<Row>
					<Col>
						<section>
							<h1 className="em1">Hi, I am Aliaksei!</h1>
							<p className="lead em2">
								I build web apps, help people, experiment with technologies, and tell stories.
							</p>
						</section>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant="dark" block>Projects</Button>
					</Col>
					<Col>
						<Button variant="primary" block>CV</Button>
					</Col>
					<Col>
						<Button variant="secondary" block>About</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						TODO: Technology icons
					</Col>
				</Row>
			</Container>
		</main>
    )
}

export default LandingMain