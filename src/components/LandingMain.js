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
					{/* TODO: links to pages on buttons */}
					<Col>
						<Button href="/portfolio-webpage/projects" variant="dark" size="lg" block>Projects</Button>
					</Col>
					<Col>
						<Button href="/portfolio-webpage/cv" variant="primary" size="lg" block>CV</Button>
					</Col>
					<Col>
						<Button href="" variant="secondary" size="lg" block>About</Button>
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