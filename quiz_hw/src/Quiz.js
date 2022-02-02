import React from "react";
import img from "./라이언.jpg";
const Quiz = (props) => {
  return (
    <div>
      <p>3번 문제</p>
      <h3>라이언은 카카오 캐릭터이다.</h3>
      <img
        src={img}
        style={{
          width: "60vw",
          margin: "16px",
        }}
      />
      <div>
        <button style={{ width: "50px", height: "50px", margin: "16px" }}>
          O
        </button>
        <button style={{ width: "50px", height: "50px", margin: "16px" }}>
          X
        </button>
      </div>
    </div>
  );
};

export default Quiz;
