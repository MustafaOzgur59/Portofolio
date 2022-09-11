import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <LinkWrapper class="link-container">
        <LinkContainer class="links">
          <button>
            <a href="#display">Home</a>
          </button>
          <button>
            <a href="#about">About</a>
          </button>
          <button>
            <a href="#projects">Projects</a>
          </button>
          <button>
            <a href="#contact">Contact</a>
          </button>
        </LinkContainer>
      </LinkWrapper>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 6;
  opacity: 95%;
  background-color: #292b35;
  padding: 1rem 0rem;
  scroll-behavior: smooth;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 0 auto;
  padding: 0rem 4rem;
`;

const LinkContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;

  button {
    background-color: inherit;
    border: none;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export default Navbar;
