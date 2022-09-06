import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode = {toggleMode} />
      {/* <Navbar aboutText="About Us" /> */}
      {/* <Navbar /> */}
      <Alert alert= {alert}/>

      <div className="container my-3">
          {/* <About /> */}
      <TextForm showAlert={showAlert} heading="Enter The Text Here" mode={mode}/>
      </div>
    </>
  );
}

export default App;
