import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Tesla = () => {
  const projects = [
    {
      name: "Model S",
      description: "Electric sedan with unparalleled performance",
      details: [
        "0-60 mph in 1.99 seconds",
        "396 miles of range"
      ]
    },
    {
      name: "Cybertruck",
      description: "All-electric truck with futuristic design",
      details: [
        "Ultra-hard 30X cold-rolled stainless steel",
        "Up to 500 miles of range"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-primary mb-4">Tesla Projects</h2>
      <Image src="https://logosmarcas.net/wp-content/uploads/2020/11/Tesla-Logo.png" fluid className="mb-4" />
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

export default Tesla;