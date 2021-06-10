import { Col, Row, Form, Button } from "react-bootstrap";
import Calendar from "../widgets/calendar";

const RegisterForm = () => {
  return (
    <div className="loginForm">
      <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter last name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
 
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Birthday</Form.Label>
      <Calendar/>
    </Form.Group>
  
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
        <Button className="greenButton" variant="primary" type="submit">
        Create account
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
