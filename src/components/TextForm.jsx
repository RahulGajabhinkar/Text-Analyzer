/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import React,{useState} from 'react'

export default function TextForm(props) {
  const clicked_upper=()=> {
    let newText=text.toUpperCase();
    setFinal(newText);
  }
  const clicked_lower=()=> {
    let newText=text.toLowerCase();
    setFinal(newText);
  }
  const clicked_remove_spaces=()=> {
    let newText=text.replace(/\s+/g, ' ').trim();
    setFinal(newText);
  }
  const clicked_clear=()=> {
    let newText="";
    setFinal(newText);
  }
  const clicked_Copy=()=> {
    var newText=document.getElementById('mybox')
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }
  const word_Reverse=()=> {
    const newText=text.split(" ").reverse().join(' ')
    setFinal(newText);
  }
  const text_Reverse=()=> {
    let newText=text.split('').reverse().join('')
    setFinal(newText);
  }
  const change_text=()=> {

    setText(event.target.value)
  }
  const [text,setText]= useState("");
  const [final,setFinal]=useState("");
  return (
    <>
      <div className={`container text-${props.theme==='light'?'dark':'light'}`}>
      
        <button className="btn btn-primary m-2" onClick={clicked_upper}>To Upper</button>
        <button className="btn btn-primary m-2" onClick={clicked_lower}>To Lower</button>
        <button className="btn btn-primary m-2" onClick={clicked_Copy}>Copy Text</button>
        <button className="btn btn-primary m-2" onClick={word_Reverse}>Reverse Words</button>
        <button className='btn btn-primary m-2' onClick ={text_Reverse}>Reverse Text</button>
        <button className="btn btn-primary m-2" onClick={clicked_remove_spaces}>Remove Extra spaces</button>
        <button className="btn btn-primary m-2" onClick={clicked_clear}>clear Text</button>
        <h1>{props.heading} </h1>
        <textarea className="form-control border border-danger " value={text} onChange={change_text} id="mybox" rows="8" placeholder ="Enter text here"></textarea>
        
      </div>
      <div className={`container text-${props.theme==='light'?'dark':'light'}`}>
        <h3>Your Text Summary</h3>
        <p>Number of words         :{(text==="")?0:text.trim().split(" ").length}.</p>
        <p>Number of characters    :{text.length}</p>
        <h3>Final Text is</h3>
        <textarea className="form-control border border-danger " value={final} onChange={change_text} id="mybox" rows="8"></textarea>
      </div>
    </>
      
    )
}
