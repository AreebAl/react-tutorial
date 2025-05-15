import  React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TexthtmlForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    console.log("toggle mode clicked");
    if(mode=='dark'){
      setMode('light');
      document.body.style.backgroundColor='grey';
      showAlert("light mode has been enabled","success");
      document.title="light mode enabled"
      setTimeout(()=>{
        document.title="light mode enabled"
      })
      setInterval(() => {
        document.title="TextUtil is amazing";
      }, 2000);
      setInterval(() => {
        document.title="Install textUtil now";
      }, 1500);
  }else{
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("dark mode has been enabled","success");
      document.title="dark mode enabled"
  }
}
  return (
<>
<Router>
    <Navbar name="Utility2" aboutUs="about Link" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert} onchange={showAlert}/>
    {/* <div className="container">
      <TexthtmlForm heading="enter the text to analyse" mode={mode} />
    </div> */}
    {/* <div>
      <About/>
    </div> */}

     <Routes>
          <Route path="/about" element={<About/>}/> 
            
          <Route path="/" element={<TexthtmlForm heading="enter the text to analyse" mode={mode} />}>
            
          </Route>
        </Routes>
       </Router>
</>

  );
}

export default App;
