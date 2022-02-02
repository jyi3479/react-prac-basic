import React from "react";
import img from "./라이언.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setMessage } from "./redux/modules/user";
import { addRank } from "./redux/modules/ranking";

const Comment = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const message_ref = React.useRef(null);
  const quiz_name = useSelector((state) => state.quiz.quiz_name);
  const user_name = useSelector((state) => state.user.user_name);

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
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
          {quiz_name}
        </span>
        에게 한마디
      </h3>
      <input
        ref={message_ref}
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
          dispatch(setMessage(message_ref.current.value));
          dispatch(
            addRank({
              score: score,
              user_name: user_name,
              message: message_ref.current.value,
            })
          );
          navigate("/ranking");
        }}
      >
        한마디하고 랭킹 보러 가기
      </button>
    </div>
  );
};

export default Comment;
