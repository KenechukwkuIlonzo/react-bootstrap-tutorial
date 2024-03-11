import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, CardImg, CardBody, CardTitle, CardText, Form  } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <container >
        <Form>
            <Row>
                <Col md>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Example@email.com" />
                    <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                    </Form.Text>
                </Form.Group>
          
          
              </Col>
              <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Card>
          <CardImg src="https://picsum.photos/200/100" />
          <CardBody>
            <CardTitle>
              Card Example
            </CardTitle>

            <CardText>
              This is an example of react bootstrap cards.
            </CardText>
            <Button variant="primary">Read More</Button>
          </CardBody>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a Button</Alert>
        <Button>Test Button</Button>
        </container>
      </header>
    </div>
  );
}

export default App;
