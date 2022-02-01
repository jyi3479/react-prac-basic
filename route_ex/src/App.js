import React from "react";
import { Route, Routes } from "react-router-dom";
import Cat from "./Cat";
import Dog from "./Dog";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={"I'm data"} />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
