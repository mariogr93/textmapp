import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversationsContext } from "../../contexts/ConversationsProvider";

function OpenConversation() {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversationsContext();
  function submitHandler(e) {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((recipient) => {
        return recipient.id;
      }),
      text
    );
  }
  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto"></div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(element) => setText(element.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <InputGroup.Append>
              <Button type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default OpenConversation;
