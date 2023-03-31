/* eslint-disable */

import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const isServer = typeof window === "undefined";
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    interimTranscript,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition && !isServer) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div>
      <p>{`Microphone: ${listening ? "on" : "off"}`}</p>
      <button
        onClick={() => SpeechRecognition.startListening({ language: "en-US" })}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
