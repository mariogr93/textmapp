import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContactsContext } from "../../contexts/ContactsProvider";

function Contacts() {
  const { contacts } = useContactsContext();
  return (
    <ListGroup variant="flus">
      {contacts.map((contact) => {
        return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}

export default Contacts;
