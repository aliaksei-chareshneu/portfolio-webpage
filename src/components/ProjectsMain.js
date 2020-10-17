import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'

const LandingMain = () => {
  return (
    <main id="main-content">
      <Container style={{ "z-index": "2" }}>
        <Card as="article" className="card mb-3">
          <Row noGutters={true}>
            <Col sm={3}>
              <div className="project-image-container bg-white">
                <Image src={`${process.env.PUBLIC_URL}/nachrdb-logo-low-res.jpg`} className="card-img" />
              </div>
            </Col>
            <Col sm={9}>
              <Card.Body>
                <Card.Title>NAChRDB</Card.Title>
                {/* TODO: shorten text (twice) */}
                <Card.Text>NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move.</Card.Text>
                <Card.Text><strong>Technologies:</strong> HTML5, Bootstrap, CSS3.0, JavaScript (ES6), JQuery, datatables, intro.js, Google Analytics, Google Tag Manager </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card as="article" className="card mb-3">
          <Row noGutters={true}>
            <Col sm={3}>
              <Image src={`${process.env.PUBLIC_URL}/nachrdb-logo-low-res.jpg`} className="card-img" />
            </Col>
            <Col sm={9}>
              <Card.Body>
                <Card.Title>NAChRDB</Card.Title>
                {/* TODO: shorten text (twice) */}
                <Card.Text>NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move.</Card.Text>
                <Card.Text><strong>Technologies:</strong> HTML5, Bootstrap, CSS3.0, JavaScript (ES6), JQuery, datatables, intro.js, Google Analytics, Google Tag Manager </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

      </Container>
    </main>





  )
}

export default LandingMain