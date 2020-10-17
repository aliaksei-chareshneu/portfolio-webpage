import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'

const LandingMain = () => {
  return (
    <main id="main-content">
      <Container style={{ "z-index": "2" }}>
        <Card as="article" className="card mb-3">
          <Row noGutters={true}>
            <Col sm={3}>
              <Image src={`${process.env.PUBLIC_URL}/nachrdb-logo-low-res.jpg`} className="card-img" />
            </Col>
            <Col sm={9}>
              <Card.Body>
                <Card.Title>NAChRDB</Card.Title>
                {/* TODO: shorten text (twice) */}
                <Card.Text>NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move. Due to their paramount importance, nAChRs have been studied for more than 50 years. NAChRDB systematizes scientific knowledge on nAChRs, making it possible to find, interactively visualize, and analyze information on specific nAChR regions in a matter of seconds. Besides, NAChRDB delivers computational predictions of potentially important parts of nAChR. NAChRDB can help to interpret the research data, spot contradictory research findings, and guide new discoveries in the field.</Card.Text>
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
                <Card.Text>NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move. Due to their paramount importance, nAChRs have been studied for more than 50 years. NAChRDB systematizes scientific knowledge on nAChRs, making it possible to find, interactively visualize, and analyze information on specific nAChR regions in a matter of seconds. Besides, NAChRDB delivers computational predictions of potentially important parts of nAChR. NAChRDB can help to interpret the research data, spot contradictory research findings, and guide new discoveries in the field.</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

      </Container>
    </main>





  )
}

export default LandingMain