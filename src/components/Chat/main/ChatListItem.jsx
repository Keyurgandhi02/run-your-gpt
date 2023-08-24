import React from "react";
import { assistant_image, user_image } from "../../../config/global";
import { HiSpeakerWave } from "react-icons/hi2";
import { handleSpeak } from "../../../utils/helper";

function ChatListItem({ user_type, message }) {
  return (
    <>
      <div
        className={`message-wrapper ${user_type === "sender" ? "reverse" : ""}`}
      >
        <img
          className="message-pp"
          src={user_type === "sender" ? user_image : assistant_image}
          alt="profile-pic"
        />
        <div className="message-box-wrapper">
          <div className="message-box">{message} </div>
        </div>
        <h6 onClick={() => handleSpeak(message)} className="speech_speaker">
          <HiSpeakerWave />
        </h6>
      </div>
    </>
  );
}

export default ChatListItem;
