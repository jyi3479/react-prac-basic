import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
<<<<<<< HEAD
import Quiz from "./Quiz";
import Start from "./Start";
import Score from "./Score";
=======
import Start from "./Start";
>>>>>>> 6dde9817799282a4692e866623df7d6937eb9d1f

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
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Start name={name} />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score name={name} />} />
      </Routes>
=======
      <Start name={name} />
>>>>>>> 6dde9817799282a4692e866623df7d6937eb9d1f
    </div>
  );
}

export default App;
