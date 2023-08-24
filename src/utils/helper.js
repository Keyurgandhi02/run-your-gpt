import { v4 as uuidv4 } from "uuid";

// Generate Random Id Handler
export const generateRandomId = () => {
  return uuidv4();
};

// Text to Speech Handler
export const handleSpeak = (message) => {
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech synthesis is not supported in this browser.");
  }
};
