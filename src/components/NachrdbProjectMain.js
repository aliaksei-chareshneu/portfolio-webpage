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
                        <article>
                            <section>
                                <h3>Project name</h3>
                                <p>NAChRDB - Bioinformatics Web Application and Database for Ion Channel Researchers</p>
                            </section>
                            <section>
                                <h3>Technologies</h3>
                                <p>
                                    HTML5, Bootstrap, JavaScript (ES6), CSS3.0, Python, PHP, JQuery, datatables, intro.js, Google Analytics, Google Tag Manager
                                </p>
                            </section>
                            <section>
                                <h3>Short description</h3>
                                <p>
                                    A web app and a database of functional annotations for synaptic proteins (nicotinic receptors) amino acid residues with interactive 3D visualization of protein models
                                </p>
                            </section>
                            <section>
                                <h3>Full description</h3>
                                <p>
                                    NAChRDB is a web application and a database of structural-functional information on nicotinic acetylcholine receptors (nAChRs) – proteins that transfer chemical signals across the nervous system, allowing us to think, feel and move. Due to their paramount importance, nAChRs have been studied for more than 50 years. NAChRDB systematizes scientific knowledge on nAChRs, making it possible to find, interactively visualize, and analyze information on specific nAChR regions in a matter of seconds. Besides, NAChRDB delivers computational predictions of potentially important parts of nAChR. NAChRDB can help to interpret the research data, spot contradictory research findings, and guide new discoveries in the field.
                                </p>
                            </section>
                            <section>
                                <h3>What I did</h3>
                                <ul>
                                    <li>Developed and implemented responsive UI, improved UX design, conducted acceptance testing and debugging</li>
                                    <li>Designed and implemented guided website tutorials and case studies using customized intro.js plugin</li>
                                    <li>Improved backend scripts to provide extended search functionality to the end users</li>
                                    <li>Parsed and cleaned relevant literature data, added it to the database. Analyzed and visualized data for outreach.</li>
                                    <li>Outreached scientific community via 5 conference talks, social media, magazine article, scientific article preprint</li>
                                    <li>Implemented interactive data tables with filter, child rows, pagination, and sort functionality</li>
                                    <li>Configured and deployed GTM web analytics tags connected with Google Analytics</li>
                                    <li>Implemented feedback/contribution forms with basic client and server-side validation</li>
                                </ul>
                            </section>
                        </article>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default NachrdbProjectMain