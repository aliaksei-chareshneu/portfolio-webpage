import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import projects from '../data/projects'
import Error from './Error'
// import nachrdbLogo from '../img/nachrdb-logo-low-res.jpg'

const IndividualProjectMain = (props) => {
    const projectEntry = projects.filter(project => project.link === `/portfolio-webpage/projects/${props.id}`)[0]
    
    if (projectEntry) {
        return (
            <main id="main-content">
                <Container>
                    {/* TODO: Prevent user from opening project page for any word + projects without project page (empty property of object in projects.js?) inserted aftwer projects/ */}
                    <p>This a project page for project id: {props.id}</p>
                    <p>Project short description: {projectEntry.shortDescription}</p>
                    {/* <Row>
                        <Col sm={3}>
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
                                <section>
                                    <h3>NAChRDB live</h3>
                                    <p>
                                        Check the actual NAChRDB web page <a href="https://crocodile.ncbr.muni.cz/Apps/NAChRDB/" title="NAChRDB webpage">here</a>
                                    </p>
                                </section>
                            </article>
                        </Col>
                    </Row> */}
                </Container>
            </main>               
        )
    }
    return (
        <Error />
    )
}

export default IndividualProjectMain