// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import { render } from "react-dom";
// import Alert from './components/Alert';
import {
  // BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enable or not.

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='rgb(0 5 54)';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='#fff';
    }
  }
  return (
    <>
      <Navbar title="Textutils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/>
        </Routes>
      <div className='container my-2'>
      {/* <TextForm heading="Enter the text to analyze" mode={mode}/> */}
      {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

