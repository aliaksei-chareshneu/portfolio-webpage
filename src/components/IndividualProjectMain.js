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
                        <Col sm={3}>
                            <img src={`${process.env.PUBLIC_URL}${p.logoFile}`}
                                alt={`Here should be ${p.name} logo`}
                                title={`${p.name} logo`}
                                className="img-fluid" />
                        </Col>
                        <Col sm={9}>
                            <article>
                                {p.title
                                    ? <section>
                                        <h3>Project name</h3>
                                        <p>{p.title}</p>
                                    </section>
                                    : null }
                                {p.technologies
                                    ? <section>
                                        <h3>Technologies</h3>
                                        <p>{p.technologies}</p>
                                    </section>
                                    : null }
                                {p.shortDescription
                                    ? <section>
                                        <h3>Short description</h3>
                                        <p>{p.shortDescription}</p>
                                    </section>
                                    : null }
                                {p.fullDescription
                                    ? <section>
                                        <h3>Full description</h3>
                                        <p>{p.fullDescription}</p>
                                    </section>
                                    : null }
                                {p.contribution.length
                                    ? <section>
                                        <h3>What I did</h3>
                                        <ul>
                                            {p.contribution.map(c => <li>c</li>)}
                                        </ul>
                                    </section>
                                    : null }
                                {p.liveLink
                                    ? <section>
                                        <h3>{p.name} live</h3>
                                    <p>
                                        Check the actual {p.name} web page <a href={p.liveLink} title={`${p.name} webpage`}>here</a>
                                    </p>
                                    </section>
                                    : null }
                                
                            </article>
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