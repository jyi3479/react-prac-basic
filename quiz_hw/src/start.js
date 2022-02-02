import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./redux/modules/user";
import styled from "styled-components";
import img from "./라이언.jpg";

const Start = (props) => {
  const user = React.useRef(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const quiz_name = useSelector((state) => state.quiz.quiz_name);

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
      <img
        src={img}
        style={{
          width: "60vw",
          margin: "16px",
        }}
      />
      <h1 style={{ fontSize: "1.5em", lineHeight: "1.5", textAlign: "center" }}>
        나는
        <span
          style={{
            backgroundColor: "#caecb2",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
        >
          {quiz_name}
        </span>
        에 대해 얼마나 알고 있을까?
      </h1>
      <input
        ref={user}
        style={{
          border: "1px solid orange",
          borderRadius: "30px",
          padding: "10px",
          width: "100%",
        }}
      />
      <button
        style={{
          padding: "10px 36px",
          backgroundColor: "#ffcc6d",
          border: "#ffcc6d",
          borderRadius: "30px",
          margin: "40px",
        }}
        onClick={() => {
          // console.log(user.current.value);
          dispatch(setName(user.current.value));
          navigate("/quiz");
        }}
      >
        시작하기
      </button>
    </div>
  );
};

export default Start;
