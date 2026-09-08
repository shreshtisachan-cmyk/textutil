
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import './App.css';

// React Router commented
/*
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
*/

function App() {

  // Dark / Light mode
  const [mode, setMode] = useState('light');

  // Alert
  const [alert, setAlert] = useState(null);

  // Show alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Change dark / light mode
  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');

      showAlert(
        'Dark mode has been enabled',
        'success'
      );

      document.body.style.backgroundColor = '#061a40';
      document.body.style.color = 'white';

      document.title = 'TextUtil - Dark Mode';

    } else {

      setMode('light');

      showAlert(
        'Light mode has been enabled',
        'success'
      );

      document.body.style.backgroundColor = '#e3f2fd';
      document.body.style.color = 'black';

      document.title = 'TextUtil - Light Mode';
    }
  };

  return (
    <>
      {/* Router commented */}

      <Navbar
        title="TextUtil"
        abouttitle="About Text"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">

        {/* Routes commented
        <Routes>
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
        */}

        {/* Directly showing TextForm */}

        <TextForm
          heading="Enter the text to Analyze"
          mode={mode}
          showAlert={showAlert}
        />

      </div>

      {/* </Router> */}
    </>
  );
}

export default App;

