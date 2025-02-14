import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const SpaceX = () => {
  const projects = [
    {
      name: "Starship",
      description: "Fully reusable spacecraft for missions to Mars",
      details: [
        "100 metric tons to low Earth orbit",
        "Refuelable in orbit"
      ]
    },
    {
      name: "Falcon 9",
      description: "Reusable rocket for reliable space transport",
      details: [
        "First orbital class rocket capable of reflight",
        "Over 100 successful missions"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-primary mb-4">SpaceX Projects</h2>
      <Image src="https://logosmarcas.net/wp-content/uploads/2020/09/SpaceX-Emblema.png" fluid className="mb-4" />
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <ul className="list-unstyled">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpaceX;