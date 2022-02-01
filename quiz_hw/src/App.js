import React from "react";
import styled from "styled-components";

function App() {
  return (
    <AppWrap>
      <Container>
        <img src="img/moomin.png" />
        <Title>
          나는 <span>무민</span>에 대해 얼마나 알고 있을까?
        </Title>
        <InputBox>
          <input />
        </InputBox>
        <Button>시작하기</Button>
      </Container>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
  background-color: lavender;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

  img {
  }
`;

const Title = styled.div`
  color: slateblue;
  text-align: center;
`;

const InputBox = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button``;

export default App;
