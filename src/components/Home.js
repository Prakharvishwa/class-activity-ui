import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 mb-4">My Dream Companies</h1>
          <p className="lead">Exploring innovative projects from industry leaders</p>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm hover-card">
            <Card.Body>
              <Image src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" fluid className="mb-3" />
              <Card.Title className="text-primary">Google</Card.Title>
              <Card.Text>
                Pioneering technology and innovation in search, AI, and cloud computing.
              </Card.Text>
              <Link to="/google" className="btn btn-outline-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm hover-card">
            <Card.Body>
              <Image src="http://www.carlogos.org/logo/Tesla-logo-2003-2500x2500.png" fluid className="mb-3" />
              <Card.Title className="text-success">Tesla</Card.Title>
              <Card.Text>
                Revolutionizing sustainable transportation and energy solutions.
              </Card.Text>
              <Link to="/tesla" className="btn btn-outline-success">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm hover-card">
            <Card.Body>
              <Image src="https://logosmarcas.net/wp-content/uploads/2020/09/SpaceX-Emblema.png" fluid className="mb-3" />
              <Card.Title className="text-danger">SpaceX</Card.Title>
              <Card.Text>
                Advancing space exploration and interplanetary travel.
              </Card.Text>
              <Link to="/spacex" className="btn btn-outline-danger">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;