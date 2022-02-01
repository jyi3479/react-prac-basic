import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  let navigate = useNavigate();
  return (
    <>
      <div>메인 화면입니다!</div>
      <button
        onClick={() => {
          navigate("/cat");
        }}
      >
        cat으로 가기
      </button>
    </>
  );
};

export default Home;
