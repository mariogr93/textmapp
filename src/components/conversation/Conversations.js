import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useConversationsContext } from "../../contexts/ConversationsProvider";
function Conversations() {
  const { conversations } = useConversationsContext();
  const [activated, setActived] = useState(0);

  function activate(index) {
    if (activated == index) {
      return;
    } else {
      setActived(index);
    }
  }

  return (
    <ListGroup>
      {conversations.map((conversation, index) => {
        return (
          <ListGroup.Item
            key={index}
            action
            onClick={() => activate(index)}
            active={index == activated}
          >
            {conversation.recipients
              .map((recipient) => {
                return recipient.name;
              })
              .join(", ")}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Conversations;
