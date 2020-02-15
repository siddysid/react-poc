import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  findWordFromSpeech
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

const callApi =() => {
  stopListening();
  findWordFromSpeech(transcript);
}
 
  return (
    <div>
      <button onMouseDown={startListening} onMouseUp = {() => callApi()} >listen</button>
      <span>{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

var options = {
  autoStart : false
}

export default SpeechRecognition(options)(Dictaphone);