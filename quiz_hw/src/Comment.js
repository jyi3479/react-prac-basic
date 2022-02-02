import React from "react";
import img from "./라이언.jpg";
import { useNavigate } from "react-router-dom";

const Comment = (props) => {
  let navigate = useNavigate();
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
      <h3 style={{ fontSize: "1.5em", lineHeight: "1.5", textAlign: "center" }}>
        <span
          style={{
            backgroundColor: "#caecb2",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
        >
          라이언
        </span>
        에게 한마디
      </h3>
      <input
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
          navigate("/ranking");
        }}
      >
        한마디하고 랭킹 보러 가기
      </button>
    </div>
  );
};

export default Comment;
