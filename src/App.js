import styled from "styled-components";
import Main from "./components/Main";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import React from "react";

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #1a1a2d;
  max-width: 100vw;
  min-height: 100vh;
  color: white;
  padding: 0rem 10rem;
  overflow-x: clip;
`;

export default App;
