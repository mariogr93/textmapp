import React from "react";
import Sidebar from "../sidebar/Sidebar";
import OpenConversation from "../conversation/OpenConversation";

function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      <OpenConversation />
    </div>
  );
}

export default Dashboard;
