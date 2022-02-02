// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
// redux 훅 중, useSelector를 가져옵니다.
import { useSelector } from "react-redux";

const BucketList = (props) => {
  let history = useNavigate();
  // 이 부분은 주석처리!
  // console.log(props);
  // const my_lists = props.list;

  // 여기에서 state는 리덕스 스토어가 가진 전체 데이터예요.
  // 우리는 그 중, bucket 모듈(리듀서) 안에 들어있는 list를 가져옵니다.
  const my_lists = useSelector((state) => state.bucket.list);
  console.log(my_lists, "dkdkdk");
  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            completed={list.completed}
            className="list_item"
            key={index}
            onClick={() => {
              history("/detail/" + index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  max-height: 50vh; // 최대 높이를 주면서, 스크롤이 ListStyle 안에서만 생기도록 함
  overflow-x: hidden;
  // 속성 값을 scroll로 주면 높이가 모자라도, 미리 scroll이 생겨있다.
  // 속성 값을 hidden으로 주면 계속 추가되어도, scroll이 생기지 않고 숨겨진 곳에서 계속 추가된다.
  // 속성 값을 auto로 주면 높이가 모자른 경우에는 스크롤이 없고, 높이가 부족하면 scroll이 생긴다.
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${(props) => (props.completed ? "slateblue" : "aliceblue")};
  color: ${(props) => (props.completed ? "white" : "black")};
`;

export default BucketList;
