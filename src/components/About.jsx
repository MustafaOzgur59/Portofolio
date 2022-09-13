/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { SectionHeader } from "../styles/index";

function About() {
  return (
    <AboutWrapper id="about" class="about section">
      <hr />
      <br />
      <SectionHeader>
        <span>01.</span>
        <h2> About</h2>
      </SectionHeader>
      <div class="about-container section-content">
        <Wrapper class="info-tech">
          <ProfileContainer class="profile-container">
            <p>
              Hi there! I&apos;m Mustafa, currently a computer engineering
              student.{" "}
            </p>

            <p>
              Currently I&apos;m learning web development, creating stuff,
              implementing eye pleasing designs and learning new technologies
              everyday.
            </p>
            <p>
              I work with <b>Next.JS</b>, <b>React</b>, <b>JavaScript (ES6+)</b>
              , <b>Tailwind</b> . I also acquired some useful knowledge of{" "}
              <b>NodeJS</b> and <b>EXPRESS</b> to better understand
              backend.Currently trying to develop my backend skills.
            </p>
          </ProfileContainer>
          <GridContainer class="tech-stack-icons about-content">
            <div class="column col-one">
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />

                <span class="icon-name">HTML</span>
              </IconContainer>
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />

                <span class="icon-name">CSS</span>
              </IconContainer>
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                <span class="icon-name">JAVASCRIPT</span>
              </IconContainer>
            </div>
            <div class="column col-two">
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                <span class="icon-name">REACT</span>
              </IconContainer>
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />

                <span class="icon-name">MONGODB</span>
              </IconContainer>
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />

                <span class="icon-name">NODEJS</span>
              </IconContainer>
            </div>
            <div class="column col-three">
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />

                <span class="icon-name">JEST</span>
              </IconContainer>
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

                <span class="icon-name">GIT</span>
              </IconContainer>
              <IconContainer class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />

                <span class="icon-name">WEBPACK</span>
              </IconContainer>
            </div>
          </GridContainer>
        </Wrapper>
      </div>
    </AboutWrapper>
  );
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: white;
  img {
    height: auto;
    width: 40px;
  }
  span {
    margin-top: 1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  padding: 1rem;
`;

const AboutWrapper = styled.div`
  margin-top: 4rem;
`;

export default About;
