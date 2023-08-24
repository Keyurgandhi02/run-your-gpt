import React from "react";
import SideBarChatItem from "./SideBarChatItem";

function SideBarChat({ allMessages }) {
  return (
    <ul className="chat-list active">
      {allMessages.map((data) => (
        <SideBarChatItem heading={data?.message} key={data?.id} />
      ))}
    </ul>
  );
}

export default SideBarChat;
