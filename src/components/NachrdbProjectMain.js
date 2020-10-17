import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
// import nachrdbLogo from '../img/nachrdb-logo-low-res.jpg'

const NachrdbProjectMain = () => {
    return (
        <main id="main-content">
            <Container>
                <Row>
                    <Col sm={3}>
                        {/* Slow in local server, may be better in build? */}
                        {/* <img src={nachrdbLogo} alt="Here should be NAChRDB logo" title="NAChRDB logo" className="img-fluid" /> */}

                        <img src={`${process.env.PUBLIC_URL}/nachrdb-logo-low-res.jpg`} alt="Here should be NAChRDB logo" title="NAChRDB logo" className="img-fluid" />
                    </Col>
                    <Col sm={9}>
                        <section>
                            <h2>NAChRDB</h2>
                            <p className="lead"></p>
                            <p>
                                NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move. Due to their paramount importance, nAChRs have been studied for more than 50 years. NAChRDB systematizes scientific knowledge on nAChRs, making it possible to find, interactively visualize, and analyze information on specific nAChR regions in a matter of seconds. Besides, NAChRDB delivers computational predictions of potentially important parts of nAChR. NAChRDB can help to interpret the research data, spot contradictory research findings, and guide new discoveries in the field.
                            </p>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default NachrdbProjectMain