import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Tutorial from "./components/Tutorial";
import Main from "./components/Main";
import Divdination from "./components/Divdination";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/wikigame/">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/divdination" element={<Divdination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
