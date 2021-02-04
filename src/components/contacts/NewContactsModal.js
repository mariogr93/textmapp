import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContactsContext } from "../../contexts/ContactsProvider";

function NewContactsModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { addContactHandler } = useContactsContext();

  function handleSubmit(e) {
    e.preventDefault();
    const id = idRef.current.value;
    const name = nameRef.current.value;
    addContactHandler(id, name);
    closeModal();
  }

  return (
    <React.Fragment>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Form.Group className="float-right">
            <Button onClick={closeModal} variant="danger" className="mr-2 ">
              Close
            </Button>
            <Button type="submit">Add contact</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </React.Fragment>
  );
}

export default NewContactsModal;
