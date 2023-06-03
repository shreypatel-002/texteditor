import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ReactDOM from "react-dom/client";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#23b46d";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#adb5bd";
    }
  };
  return (
    <>
      <Router>
        <Navbar Title="TextEditor" mode={mode} toggleMode={toggleMode} />
        <div className="container" my-5="true">
          <Routes>
            <Route index element={<Textform heading="Enter Text" />} />
            <Route path="/Aboutus" element={<Aboutus />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
