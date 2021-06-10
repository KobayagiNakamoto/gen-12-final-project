import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <div className="loginForm">
<Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
        <Button className="greenButton" variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
