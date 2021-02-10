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

import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/UseLocalStorage";

const ConversationsContext = React.createContext();

export function useConversationsContext() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const value = {
    createConversation,
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
}
