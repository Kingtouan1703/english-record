/* eslint-disable */

import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ButtonV1 from "~/components/button/button";

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
    <div className="w-full">
      <div className="mx-auto max-w-5xl">
        <p>{`Microphone: ${listening ? "on" : "off"}`}</p>
        <ButtonV1
          onClick={() =>
            SpeechRecognition.startListening({ language: "en-US" })
          }
        >
          Start
        </ButtonV1>
        <ButtonV1 onClick={SpeechRecognition.stopListening}>Stop</ButtonV1>
        <ButtonV1 onClick={resetTranscript}>Reset</ButtonV1>
        <p>{transcript}</p>
        <div>{interimTranscript}</div>
      </div>
    </div>
  );
};
export default Dictaphone;
