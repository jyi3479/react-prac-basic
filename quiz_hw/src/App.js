import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Quiz from "./Quiz";
import Start from "./Start";
import Score from "./Score";
import Comment from "./Comment";
import Ranking from "./Ranking";

function App() {
  return (
    <div
      className=""
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </div>
  );
}

export default App;
