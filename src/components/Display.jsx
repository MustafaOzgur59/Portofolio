import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Power3 } from "gsap";

function Display() {
  const tl = gsap.timeline();
  // intro animation
  useEffect(() => {
    // Hero content
    console.log("Haha");
    const heroTitle = document.querySelectorAll(".title");
    const headlineFirst = heroTitle[0];
    const headlineSecond = heroTitle[1];
    const headlineThird = heroTitle[2];
    const headlineFourth = heroTitle[3];
    tl.fromTo(
      [...heroTitle],
      {
        y: 100,
        opacity: 0,
        ease: Power3,
      },
      { y: 0, opacity: 1, duration: 1.4 }
    );
  }, [tl]);
  return (
    <StyledDisplay id="hero">
      <HeroMain className="hero__main">
        <HeroTitle className="hero__title">
          <span className="title__wrapper">
            <span className="title">Mustafa</span>
          </span>
          <span className="title__wrapper">
            <span className="title">Özgür</span>
          </span>
          <span className="title__wrapper">
            <span className="title">Computer</span>
          </span>
          <span className="title__wrapper">
            <span className="title">Engineer</span>
          </span>
        </HeroTitle>
      </HeroMain>
      <button type="button">
        <a href="#about">
          <span>Get to know me</span>{" "}
        </a>
      </button>
    </StyledDisplay>
  );
}

const StyledDisplay = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 4vw;
  padding-top: 2rem;
  box-sizing: border-box;
  padding-bottom: 1rem;

  button{
    justify-self:center;
    border: 2px solid #d24141;
    border-radius: 8px;
    font-size: 1.5rem;
    margin-top: 30px;
    padding: 8px;
    width: 250px;
    background: linear-gradient(270deg,transparent 50%,#d24141 0) 100%;
    background-size: 200%;
    transition: background-color .2s ease-in-out;

    a{
    align-items: center;
    color:white;
    background-color:
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    }

    &:hover {
      background-color:#d24141;
    }
  }
`;

const HeroMain = styled.div`
  width: 100%;
  max-width: 60rem;
  margin-inline: auto;
`;

const HeroTitle = styled.h1`
  position: relative;
  height: fit-content;
  width: 100%;
  max-width: 70vw;
  display: flex;
  flex-direction: column;

  .title__wrapper {
    overflow: hidden;
    text-align: left;
    width: 100%;

    * {
      padding: 0.75rem;
      opacity: 1;
    }

    &:nth-child(2) {
      padding-left: 7vw;
    }
    &:nth-child(3) {
      padding-left: 15vw;
    }
    &:nth-child(4) {
      padding-left: 23vw;
    }

    .title {
      display: inline-block;
      text-transform: uppercase;
      font-size: 6vw;
      transform-origin: bottom left;
      opacity: 1;
    }

    .title__wrapper:first-child {
      align-self: flex-start;
    }

    .title__wrapper:last-child {
      align-self: flex-end;
      text-align: right;
    }
  }
`;

export default Display;
