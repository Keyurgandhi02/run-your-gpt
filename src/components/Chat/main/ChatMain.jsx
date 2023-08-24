import React from "react";
import { useState } from "react";
import ChatInputForm from "./ChatInputForm";
import ChatList from "./ChatList";

function ChatMain() {
  const [isUserMessage, setUserMessage] = useState([]);

  // Get User Message From Input
  const getUserMessage = (message) => {
    setUserMessage(message);
  };

  return (
    <>
      <div className="app-main">
        <div className="chat-wrapper">
          <ChatList isUserMessage={isUserMessage} />
        </div>
        <ChatInputForm getUserMessage={getUserMessage} />
      </div>
    </>
  );
}

export default ChatMain;
