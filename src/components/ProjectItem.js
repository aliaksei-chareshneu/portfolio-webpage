import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'

const ProjectItem = (props) => {
    return (
        <Card as="article" className="card mb-3">
          <Row noGutters={true}>
            <Col sm={3}>
              <div className="project-image-container" style={{backgroundColor: props.logoBgColor}}>
                <a href={props.link} title={props.name + " project page"}>
                  <Image src={`${process.env.PUBLIC_URL}/${props.logoFile}`} className="card-img" />
                </a>
              </div>
            </Col>
            <Col sm={9}>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.shortDescription} <a href={props.link}>More...</a></Card.Text>
                <Card.Text><strong>Technologies:</strong> {props.technologies}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
    )
}

export default ProjectItem