import React from "react";
import img from "./라이언.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Score = (props) => {
  let navigate = useNavigate();
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const quiz_name = useSelector((state) => state.quiz.quiz_name);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
  const _score =
    (100 / quiz_list.length) *
    quiz_list.filter((q, idx) => {
      return q.answer === user_answer_list[idx];
    }).length;
  const score = Math.round(_score);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center", // 1. flex의 정렬을 담당하는 두 속성
        justifyContent: "center", // 2. flex의 정렬을 담당하는 두 속성
        flexDirection: "column", //flex에서 기본값이 row로 정렬하기 때문에 column으로 바꿔줌
        padding: "16px",
        boxSizing: "border-box", //테두리를 포함한 넓이가 이 요소의 넓이라고 지정
      }}
    >
      <h3 style={{ fontSize: "1.5em", lineHeight: "1.5", textAlign: "center" }}>
        <span
          style={{
            backgroundColor: "#caecb2",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
        >
          {quiz_name}
        </span>
        퀴즈에 대한 내 점수는{" "}
        <span
          style={{
            backgroundColor: "#caecb2",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
        >
          {score}{" "}
        </span>
        점
      </h3>
      <p>우와! 우린 참 친해요!</p>
      <button
        style={{
          padding: "10px 36px",
          backgroundColor: "#ffcc6d",
          border: "#ffcc6d",
          borderRadius: "30px",
          margin: "40px",
        }}
        onClick={() => {
          navigate("/comment");
        }}
      >
        {quiz_name}에게 한 마디
      </button>
    </div>
  );
};

export default Score;
