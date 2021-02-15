import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversationsContext } from "../../contexts/ConversationsProvider";
function Conversations() {
  const { conversations, selectConversationIndex } = useConversationsContext();

  return (
    <ListGroup>
      {conversations.map((conversation, index) => {
        return (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectConversationIndex(index)}
            active={conversation.selected}
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
