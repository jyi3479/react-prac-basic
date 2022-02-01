import React from "react";
import styled from "styled-components";
import Start from "./Start";

function App() {
  const [name, setName] = React.useState("라이언");
  return (
    <div
      className=""
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <Start name={name} />
    </div>
  );
}

export default App;
