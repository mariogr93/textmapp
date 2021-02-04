import React from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import useLocalStorage from "./components/hooks/UseLocalStorage";
import { ContactsProvider } from "./contexts/ContactsProvider";
function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
