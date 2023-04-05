/* eslint-disable */

import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ButtonV1 from "~/components/button/button";
import TextArea from "~/components/text-area/text-area";

const Dictaphone = () => {
  const [message, setMessage] = useState("");
  const isServer = typeof window === "undefined";
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const commands = [
    {
      command: "stop",
      callback: (comand) => {
        console.log("stop", comand);
        SpeechRecognition.stopListening();
      },
    },
    {
      command: "I would like to order *",
      callback: (food: string) => setMessage(`Your order is for: ${food}`),
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "new conversation *",
      callback: (data) => {
        const newTranscipts = transcripts;
        newTranscipts.push(data);
        setTranscripts(newTranscipts);
      },
    },
  ];
  console.log(message);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    interimTranscript,
  } = useSpeechRecognition({ commands });

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
            SpeechRecognition.startListening({
              language: "en-US",
              continuous: true,
            })
          }
        >
          Start
        </ButtonV1>
        <ButtonV1 onClick={SpeechRecognition.stopListening}>Stop</ButtonV1>
        <ButtonV1 onClick={resetTranscript}>Reset</ButtonV1>
        <p>{transcript}</p>
        {transcripts.map((item) => {
          return (
            <div>
              <div>listened transcript</div>
              <div className="flex justify-between">
                <div>My phrase is {item}</div>
                <ButtonV1>Copy</ButtonV1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dictaphone;
