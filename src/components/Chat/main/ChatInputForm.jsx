import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import {
  SEND_MESSAGE_POST,
  SERVER_URI,
  speech_info_text,
  user_msg_limit,
  user_msg_limit_error,
} from "../../../config/global";
import GlobalInput from "../../../UI/GlobalInput";
import { generateRandomId } from "../../../utils/helper";
import { messages } from "../../../store/authSlice";

function ChatInputForm({ getUserMessage }) {
  const dispatch = useDispatch();
  const [allMessage, setAllMessage] = useState([]);
  const [isMicStatus, setMicStatus] = useState(null);
  const [isBtnLoader, setBtnLoader] = useState(false);
  const [userMessage, setUserMessage] = useState({
    Message: "",
    user_type: "",
  });

  // All Past Messages and thier responses
  const allMessages = useSelector((state) => state.auth.message);

  // User Input Message Handler
  const onInputMessageHandler = (name, value) => {
    setUserMessage({ ...userMessage, Message: value, user_type: "sender" });
  };

  // Speech Recognition
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  // Speech Recognition Mic ON-OFF Handler
  const micHandler = () => {
    if (isMicStatus === null || isMicStatus === false) {
      SpeechRecognition.startListening().then(() => {
        setMicStatus(!isMicStatus);
      });
    } else {
      SpeechRecognition.stopListening().then(() => {
        setMicStatus(!isMicStatus);
      });
    }
  };

  // On Submit User Message Handler
  const onSubmitMessageHandler = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    try {
      if (userMessage?.Message) {
        // New Chat Message
        const newMessage = {
          id: generateRandomId(),
          message: userMessage?.Message,
          user_type: userMessage?.user_type,
        };

        // API Response
        const response = await axios.post(SERVER_URI + SEND_MESSAGE_POST, {
          data: userMessage?.Message,
        });

        if (response.data) {
          setBtnLoader(false);

          // User Final Output with message
          let finalOutput = {
            id: newMessage?.id,
            res: response.data?.data,
            ...newMessage,
          };

          dispatch(messages(finalOutput));
        }

        setAllMessage([...allMessage, newMessage]);
        getUserMessage([...allMessage, newMessage]);

        setUserMessage({
          Message: "",
        });
      }
    } catch (err) {
      setBtnLoader(false);
      alert(err);
    }
  };

  return (
    <>
      {allMessages.length < user_msg_limit ? (
        <>
          <div className="chat-input-wrapper">
            <form onSubmit={onSubmitMessageHandler} className="input-wrapper">
              <GlobalInput
                inputPlaceHolder="Message"
                onChangeHandler={onInputMessageHandler}
                inputType="text"
                className="chat-input"
                disabled={transcript.length > 0}
                isValue={
                  transcript.length > 0 ? transcript : userMessage?.Message
                }
              />

              {userMessage?.Message.length > 0 ||
              (transcript.length > 0 && !isBtnLoader) ? (
                <button className="chat-send-btn" type="submit">
                  Send
                </button>
              ) : null}

              {isBtnLoader && <span className="loader"></span>}
            </form>

            {browserSupportsSpeechRecognition && (
              <button className="mic-btn" onClick={micHandler}>
                {isMicStatus && listening ? (
                  <BsMicMuteFill size={20} />
                ) : (
                  <BsMicFill size={20} />
                )}
              </button>
            )}
          </div>
          <span className="speech-info">{speech_info_text}</span>
        </>
      ) : (
        <p>{user_msg_limit_error}</p>
      )}
    </>
  );
}

export default ChatInputForm;
