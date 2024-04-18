/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import {faCirclePlay,faCircleStop} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
  const [isRecording,setIsRecording]=useState(true);
  const RecordHandler = () => {
    if (isRecording === true) {
      setIsRecording(false);
      const startListening = () => SpeechRecognition.startListening({
        continuous: true, language: 'en-IN',
      });
      startListening(); 
    } else {
      setIsRecording(true);
      const stopListening = () => SpeechRecognition.stopListening();
      stopListening(); 
    }
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg  bg-warning`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text Analyzer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/About">About</Link> */}
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
        </li>
      </ul>
      
      <FontAwesomeIcon
      icon={isRecording?faCirclePlay:faCircleStop}
      onClick={RecordHandler} />
      
      <div className={`form-check form-switch `}>
        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label onClick={props.toggleMode} className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}


// navbar-${props.theme}

// text-${props.theme==='light'?'dark':'light'}