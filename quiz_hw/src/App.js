import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Quiz from "./Quiz";
import Start from "./Start";
import Score from "./Score";

function App() {
  const [name, setName] = React.useState("라이언");
  return (
    <div
      className=""
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <Routes>
        <Route path="/" element={<Start name={name} />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score name={name} />} />
      </Routes>
    </div>
  );
}

export default App;
