import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}

        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar aboutText="About Us" /> */}
        {/* <Navbar /> */}
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Remove Extra Spaces And Manipulate Text" mode={mode} />}/> */}
          <TextForm showAlert={showAlert} heading="Enter The Text Here" mode={mode} />
            
            {/* <Route exact path="/about" element={<About  mode={mode}/>}/> */}
            
          {/* </Routes> */}


        </div>

      {/* </Router> */}
    </>
  );
}

export default App;
