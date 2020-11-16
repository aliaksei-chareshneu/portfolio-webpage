import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import projects from '../data/projects'
import Error from './Error'
// import nachrdbLogo from '../img/nachrdb-logo-low-res.jpg'

const IndividualProjectMain = (props) => {
    const p = projects.filter(project => project.link === `/portfolio-webpage/projects/${props.id}`)[0]

    if (p) {
        return (
            <main id="main-content">
                <Container>
                    <Row>
                        <Col>
                            <h3>{p.title}</h3>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col sm={6} className="mb-3">
                            {/* Conditional rendering demo or logo, whatever is available */}
                            {p.demoFile
                                ? <img src={`${process.env.PUBLIC_URL}/${p.demoFile}`}
                                    alt={`Here should be ${p.name} demo`}
                                    title={`${p.name} demo`}
                                    className="img-fluid" />
                                : <img src={`${process.env.PUBLIC_URL}/${p.logo.filename}`}
                                    alt={`Here should be ${p.name} logo`}
                                    title={`${p.name} logo`}
                                    className="img-fluid" />
                                }
                        </Col>
                        <Col sm={6}>
                            <article>
                                {/* {p.title
                                    ? <section>
                                        <h4>Project name</h4>
                                        <p>{p.title}</p>
                                    </section>
                                    : null } */}
                                {p.technologies
                                    ? <section>
                                        <h4>Technologies</h4>
                                        <p>{p.technologies}</p>
                                    </section>
                                    : null }
                                {p.shortDescription
                                    ? <section>
                                        <h4>Short description</h4>
                                        <p>{p.shortDescription}</p>
                                    </section>
                                    : null }
                                {p.fullDescription
                                    ? <section>
                                        <h4>Full description</h4>
                                        <p>{p.fullDescription}</p>
                                    </section>
                                    : null }
                                {p.contribution.length
                                    ? <section>
                                        <h4>What I did</h4>
                                        <ul>
                                            {p.contribution.map(c => <li>c</li>)}
                                        </ul>
                                    </section>
                                    : null }
                                {p.liveLink
                                    ? <section>
                                        <h4>{p.name} live</h4>
                                    <p>
                                        Check the actual {p.name} web page <a href={p.liveLink} title={`${p.name} webpage`}>here</a>
                                    </p>
                                    </section>
                                    : null }
                                {/* {p.demoFile
                                    ? <section>
                                        <h4>{p.name} demo</h4>
                                        <img src={`${process.env.PUBLIC_URL}/${p.demoFile}`}
                                            alt={`Here should be ${p.name} demo`}
                                            title={`${p.name} demo`}
                                            className="img-fluid" />
                                    </section>
                                    : null } */}
                            </article>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className="my-2">
                            <Button variant="dark" size="lg" href="/portfolio-webpage/projects" block>Previous Project</Button>
                        </Col>
                        <Col sm={4} className="my-2">
                            <Button variant="secondary" size="lg" href="/portfolio-webpage/projects" block>Back to Project Selection</Button>
                        </Col>
                        <Col sm={4} className="my-2">
                            <Button variant="dark" size="lg" href="/portfolio-webpage/projects" block>Next Project</Button>
                        </Col>
                    </Row>
                </Container>
            </main>               
        )
    }
    return (
        <Error />
    )
}

export default IndividualProjectMain