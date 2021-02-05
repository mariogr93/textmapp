import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useContactsContext } from "../../contexts/ContactsProvider";
import { useConversationsContext } from "../../contexts/ConversationsProvider";

function NewConversationModal({ closeModal }) {
  const [selectedContacIds, setSelectedContacIds] = useState([]);
  const { contacts } = useContactsContext();
  const { createConversation } = useConversationsContext();

  function submitHandler(e) {
    e.preventDefault();
    createConversation(selectedContacIds);
    closeModal();
  }

  function checkboxChangeHandler(contactId) {
    setSelectedContacIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }
  return (
    <React.Fragment>
      <Modal.Header>Create conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          {contacts.map((contact) => {
            return (
              <Form.Group key={contact.id}>
                <Form.Check
                  type="checkbox"
                  value={selectedContacIds.includes(contact.id)}
                  label={contact.name}
                  onChange={() => checkboxChangeHandler(contact.id)}
                />
              </Form.Group>
            );
          })}
          <Button>Cancel</Button>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </React.Fragment>
  );
}

export default NewConversationModal;
