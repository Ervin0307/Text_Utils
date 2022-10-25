import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btncol, setBtncol] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses= ()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setBtncol("danger");
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtncol("primary");
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return ( 
    <>
      <BrowserRouter>
        
          <Navbar title="Junkies" toggleMode={toggleMode} mode={mode} />
          <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={
            <Textform heading="Word counter, Character counter, Remove extra spaces" btncol={btncol} mode={mode} showAlert={showAlert} />}>
          </Route>


          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>


      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
