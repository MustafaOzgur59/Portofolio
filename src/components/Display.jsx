import React from "react";
import styled from "styled-components";

function Display() {
  return (
    <StyledDisplay id="display" className="home">
      Display
    </StyledDisplay>
  );
}

const StyledDisplay = styled.div`
  height: 200vh;
  min-height: 100vh;
`;

export default Display;
