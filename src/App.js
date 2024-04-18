/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import './App.css';
import About from './components/About';
import Dictaphone from './components/Dictaphone';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


// import Table from './components/Table';
// import Dictaphone  from './components/Dictaphone';
function App() {
  const [theme, setTheme]=useState('light');
  const [speech, setSpeech]=useState('stop');
  const toggleMode = () => {
    if(theme==='light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#6E6C6B';
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor='white';
    }
  }
  const Speechecogniser = () => {
    if(speech==='stop') {
      
    }
  } 
  return (
    <>
        <Navbar title="textutils" theme={theme} toggleMode={toggleMode}></Navbar>
      <Router>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Text to Analyze" theme={theme} toggle={toggleMode}></TextForm>}>
          </Route> 
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      </Router>
      {/* <Table></Table> */}
      
    </>
    
  );

}

export default App;


//             {/* <div className="container my-1"> */}
// {/* </div> */}