import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

function Login({ onIdSubmit }) {
  const idRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const value = idRef.current.value;
    if (value !== "") {
      onIdSubmit(value);
    }
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={submitHandler} className="w-100">
        <Form.Group>
          <Form.Label className="text-center w-100">Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef}></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
