import React from "react";
import "./App.css";
// styled와 keyframes를 불러옵니다!
import styled, { keyframes } from "styled-components";
function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const boxAnimation = keyframes`
0% {
  border-radius: 0px;
  top: 20px;
}
50% {
  border-radius: 25px;
  top: 400px;
}
100% {
  border-radius: 50px;
  top: 20px
}
`;
// 박스를 먼저 하나 만들어줍니다
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: green;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear alternate;
`;

export default App;
