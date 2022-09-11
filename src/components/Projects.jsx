import React from "react";
import styled from "styled-components";
import { SectionHeader } from "../styles/index";

function Projects() {
  return (
    <ProjectWrapper id="projects">
      <hr />
      <br />
      <SectionHeader>
        <span>02.</span>
        <h2> Projects</h2>
      </SectionHeader>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  min-height: 50vh;
`;

export default Projects;
