import React from "react";

function SideBarChatItem({ heading, message }) {
  return (
    <>
      <li className="chat-list-item active">
        <span className="chat-list-name">{heading}</span>
      </li>
    </>
  );
}

export default SideBarChatItem;
