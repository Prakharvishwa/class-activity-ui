import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Google = () => {
  const projects = [
    {
      name: "Project Gemini",
      description: "Next-generation AI model revolutionizing natural language processing",
      details: [
        "Multi-modal capabilities combining text, image, and code understanding",
        "Enhanced reasoning and problem-solving abilities"
      ]
    },
    {
      name: "Google Cloud",
      description: "Enterprise-grade cloud computing platform",
      details: [
        "Scalable infrastructure with global reach",
        "Advanced machine learning and data analytics tools"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-primary mb-4">Google Projects</h2>
      <Image src="http://pluspng.com/img-png/google-logo-png-revised-google-logo-1600.png" fluid className="mb-4" />
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

export default Google;