import React from "react";
import img from "./라이언.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";
import Progress from "./Progress";
import styled from "styled-components";

const Quiz = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

  // const [user_answer_list, setAnswerList] = React.useState([]);

  const setAnswer = (user_answer) => {
    // console.log(user_answer);
    dispatch(addAnswer(user_answer));
    // setAnswerList([...user_answer_list, user_answer]);
  };

  // user_answer_list가 바뀔 때마다 실행될 것임.
  React.useEffect(() => {
    // console.log(user_answer_list);
    if (user_answer_list.length === quiz_list.length) {
      navigate("/score");
      return;
    }
  }, [user_answer_list]);

  if (user_answer_list.length === quiz_list.length) {
    return null;
  }

  return (
    <QuizContainer>
      <Progress />
      <p>{user_answer_list.length + 1}번 문제</p>
      <h3>{quiz_list[user_answer_list.length].question}</h3>
      <img
        src={img}
        style={{
          width: "60vw",
          margin: "16px",
        }}
      />
      <div>
        <button
          onClick={() => {
            setAnswer(true);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}
        >
          O
        </button>
        <button
          onClick={() => {
            setAnswer(false);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}
        >
          X
        </button>
      </div>
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    // border-bottom: 3px solid #ffd6aa;
    border-radius: 30px;
  }
`;

export default Quiz;
