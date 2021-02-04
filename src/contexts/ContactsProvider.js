import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/UseLocalStorage";

const ContactsContext = React.createContext();

export function useContactsContext() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function addContactHandler(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }
  return (
    <ContactsContext.Provider value={{ contacts, addContactHandler }}>
      {children}
    </ContactsContext.Provider>
  );
}
