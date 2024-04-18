/* eslint-disable no-unused-vars */
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";

const Dictaphone = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isRecording,setIsRecording] =useState(true);
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    const startListening = () => SpeechRecognition.startListening({
         continuous: true, language: 'en-IN' ,});
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default Dictaphone;