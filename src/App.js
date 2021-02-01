import React, { useState } from "react";
import Login from "./components/login/Login";

function App() {
  const [id, setId] = useState();
  return (
    <React.Fragment>
      {id}
      <Login onIdSubmit={setId} />
    </React.Fragment>
  );
}

export default App;
