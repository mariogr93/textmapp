// import React, { useContext } from "react";
// import useLocalStorage from "../components/hooks/UseLocalStorage";

// const ConversationContext = React.createContext();

// export function useConversationsContext() {
//   return useContext(ConversationContext);
// }

// export function ConversationsProvider({ children }) {
//   const [conversations, setConversations] = useLocalStorage(
//     "conversations",
//     []
//   );

//   function createConversation(recipients) {
//     setConversations((prevConversations) => {
//       return [...prevConversations, { recipients, message: [] }];
//     });
//   }

//   return (
//     <ConversationContext.Provider value={{ conversations, createConversation }}>
//       {children}
//     </ConversationContext.Provider>
//   );
// }

import React, { useContext, useState } from "react";
import useLocalStorage from "../components/hooks/UseLocalStorage";
import { useContactsContext } from "./ContactsProvider";

const ConversationsContext = React.createContext();

export function useConversationsContext() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContactsContext();

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });

    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      const name = (contact && contact.name) || message.sender;
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectedConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],

    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
