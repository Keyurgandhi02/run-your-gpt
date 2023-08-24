import React from "react";
import { useSelector } from "react-redux";
import { APP_NAME } from "../../../config/global";
import ChatListItem from "./ChatListItem";

function ChatList({ isUserMessage }) {
  // All Past Messages and thier responses
  const allMessages = useSelector((state) => state.auth.message);

  return (
    <>
      {isUserMessage.map((user, index) => (
        <React.Fragment key={user.id}>
          <ChatListItem user_type={user.user_type} message={user.message} />
          {allMessages[index] && (
            <ChatListItem
              key={allMessages[index].id}
              user_type="server"
              message={allMessages[index].res}
            />
          )}
        </React.Fragment>
      ))}

      {allMessages.length === 0 && <h1>{APP_NAME}</h1>}
    </>
  );
}

export default ChatList;
