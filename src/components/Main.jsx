import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import styled from "styled-components";

function Main() {
  return (
    <>
      <HomeWrapper className="home">
        <Display />
        <Navbar />
        <About />
        <Projects />
      </HomeWrapper>
      <Contact />
    </>
  );
}

const HomeWrapper = styled.div`
  background-color: #1a1a2d;
`;

export default Main;
