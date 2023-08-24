import React, { useEffect } from "react";
import ChatMain from "../components/Chat/main/ChatMain";
import SideBar from "../components/Chat/sidebar/SideBar";
import "../index.scss";

function ChatPage() {
  // Update Body CSS
  useEffect(() => {
    document.body.style.display = "flex";
  });

  return (
    <div className="app-container">
      <SideBar />
      <ChatMain />
    </div>
  );
}

export default ChatPage;
