import React from "react";
import { useSelector } from "react-redux";
import SideBarChat from "./SideBarChat";
import SideBarHeader from "./SideBarHeader";

function SideBar() {
  // All Past Messages and thier responses
  const allMessages = useSelector((state) => state.auth.message);

  return (
    <>
      <div className="app-left">
        <SideBarHeader />
        <div className="chat-list-wrapper">
          <div className="chat-list-header">
            All Conversations{" "}
            <span className="c-number">{allMessages.length}</span>
          </div>
          <SideBarChat allMessages={allMessages} />
        </div>
      </div>
    </>
  );
}

export default SideBar;
