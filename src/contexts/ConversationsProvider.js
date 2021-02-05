import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/UseLocalStorage";
import { useContactsContext } from "./ContactsProvider";

const ConversationContext = React.createContext();

export function useConversationsContext() {
  return useContext(ConversationContext);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const { contacts } = useContactsContext();

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, message: [] }];
    });
  }

  const formattedConversations = conversations.map((conversation) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;

      return { id: recipient, name };
    });

    return { ...conversations, recipients };
  });

  return (
    <ConversationContext.Provider
      value={{ conversations: formattedConversations, createConversation }}
    >
      {children}
    </ConversationContext.Provider>
  );
}
