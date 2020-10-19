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
                <a href="/portfolio-webpage/projects/nachrdb" title="NAChRDB project page">
                  <Image src={`${process.env.PUBLIC_URL}/nachrdb-logo-low-res.jpg`} className="card-img" />
                </a>
              </div>
            </Col>
            <Col sm={9}>
              <Card.Body>
                <Card.Title>NAChRDB - Bioinformatics Web Application and Database for Ion Channel Researchers</Card.Title>
                <Card.Text>NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move. <a href="/portfolio-webpage/projects/nachrdb">Read more...</a></Card.Text>
                <Card.Text><strong>Technologies:</strong> HTML5, Bootstrap, CSS3.0, JavaScript (ES6), JQuery, datatables, intro.js, Google Analytics, Google Tag Manager </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card as="article" className="card mb-3">
          <Row noGutters={true}>
            <Col sm={3}>
              <a href="https://aliaksei-chareshneu.github.io/japan-spirit/" title="Japan Spirit web page">
                {/* <Image src={`${process.env.PUBLIC_URL}/nachrdb-logo-low-res.jpg`} className="card-img" /> */}
              </a>
            </Col>
            <Col sm={9}>
              <Card.Body>
                <Card.Title>Japan Spirit</Card.Title>
                <Card.Text>Guess the meaning of a random hieroglyph (kanji) and enjoy the beautiful views of Japan!</Card.Text>
                <Card.Text><strong>Technologies:</strong> React, HTML5, JavaScript, CSS3</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

      </Container>
    </main>





  )
}

export default LandingMain