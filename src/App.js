import React from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import UseLocalStorage from "./components/hooks/UseLocalStorage";

function App() {
  const [id, setId] = UseLocalStorage("id");

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
