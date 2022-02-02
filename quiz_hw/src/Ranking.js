import React from "react";
import { useNavigate } from "react-router-dom";

const Ranking = (props) => {
  const navigate = useNavigate();
  const _user_data = [
    { score: 20, user_name: "김철수", message: "라이언 안녕!" },
    { score: 80, user_name: "김영희", message: "라이언 안녕!" },
    { score: 30, user_name: "김진수", message: "라이언 안녕!" },
  ];

  const user_data = _user_data.sort((a, b) => {
    return b.score - a.score;
  });
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderBottom: "1px solid #888 ",
          width: "100vw",
          padding: "16px",
          background: "#fff",
        }}
      >
        ㅁㅁㅁㅁ 명의 사람 중에서 당신은?
      </div>
      <div style={{ margin: "10vh 0vh" }}>
        {user_data.map((u, idx) => {
          return (
            <div
              style={{
                display: "flex",
                border: "1px solid #888",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              <h1>{idx + 1}등</h1>
              <div>
                <h3>{u.user_name}</h3>
                <p>{u.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{ position: "fixed", bottom: "30px", left: 0, width: "100vW" }}
      >
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          다시하기
        </button>
      </div>
    </div>
  );
};

export default Ranking;
