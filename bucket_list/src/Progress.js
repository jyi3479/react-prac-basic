import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  //   console.log(bucket_list);

  let count = 0;
  bucket_list.map((b, idx) => {
    if (b.completed) {
      count++;
    }
  });
  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"}></HighLight>
      <Circle></Circle>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  display: flex; // HighLight와 Circle이 한 줄에 붙어있게 하도록.
  align-items: center; //세로로 중앙 정렬
`;

const HighLight = styled.div`
  background: slateblue;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border: 5px solid slateblue;
  border-radius: 40px;
  margin: 0px 0px 0px -30px; //margin 마이너스 값을 줘서 왼쪽으로 들어가게 한다.
`;

export default Progress;
