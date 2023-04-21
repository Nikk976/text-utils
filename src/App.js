
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
    
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
          setAlert({
            message:message,
            type:type
          })
          setTimeout(() => {
             setAlert(null);
          }, 1500);
  }

  const [mode,setMode] = useState('light');
  const [modeText, setModeText] = useState('dark');
  const toggleMode = ()=>{
     if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#06123b';
      setModeText('light')
      showAlert("Dark mode has been enabled!","success");
     }
     else {
      setMode('light');
      document.body.style.backgroundColor='white';
      setModeText('dark');
      showAlert("Light mode has been enabled!","success");
     }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" toggleMode={toggleMode} modeText={modeText} mode={mode} aboutText="AboutUs" />
    <Alert alert ={alert}/>
    
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route path="/about" element={<About/>} /> */}
          <TextForm showAlert = {showAlert} mode={mode} heading="Enter the text to Analyze" />

        {/* </Routes> */}
       {/* <About/> */}
    </div>
    {/* </Router> */}
     </>
  );
}


export default App;
