/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback } from "react";
import styled from "styled-components";
import { SectionHeader } from "../styles/index";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import instagramImage from "../images/instagramClone.png";
import wheresWaldo from "../images/wheresWaldo.png";
import shoppingCart from "../images/shoppingCart.png";
import pokemonMemoryGame from "../images/pokemonMemoryGame.png";
import cvApp from "../images/cvApp.png";
import todoList from "../images/todoList.png";
import etchASketch from "../images/etchASketch.png";

function Projects() {
  const projects = [
    {
      name: "Instagram clone",
      url: "https://top-instagram-clone-76q9yubkx-dfaunm-gmailcom.vercel.app/login",
      repo: "https://github.com/MustafaOzgur59/Top-InstagramClone",
      imageSrc: instagramImage,
    },
    {
      name: "Wheres Waldo",
      url: "https://mustafaozgur59.github.io/TOP-Wheres_Waldo/",
      repo: "https://github.com/MustafaOzgur59/TOP-Wheres_Waldo",
      imageSrc: wheresWaldo,
    },
    {
      name: "Shopping Cart",
      url: "https://mustafaozgur59.github.io/Top-ShoppingCart/",
      repo: "https://github.com/MustafaOzgur59/Top-ShoppingCart",
      imageSrc: shoppingCart,
    },
    {
      name: "Pokemon Memory Game",
      url: "https://mustafaozgur59.github.io/Top-Pokemon_Memory_game/",
      repo: "https://github.com/MustafaOzgur59/Top-Pokemon_Memory_game",
      imageSrc: pokemonMemoryGame,
    },
    {
      name: "Todo List",
      url: "https://mustafaozgur59.github.io/Top-Todo/",
      repo: "https://github.com/MustafaOzgur59/Top-Todo",
      imageSrc: todoList,
    },
    {
      name: "Cv Application",
      url: "https://mustafaozgur59.github.io/Top-Cv/",
      repo: "https://github.com/MustafaOzgur59/Top-Cv",
      imageSrc: cvApp,
    },
    {
      name: "Etch a Sketch",
      url: "https://mustafaozgur59.github.io/Etch-a-Sketch/",
      repo: "https://github.com/MustafaOzgur59/Etch-a-Sketch",
      imageSrc: etchASketch,
    },
  ];

  const Project = ({ name, url, imageSrc, repo }) => {
    return (
      <ProjectWrapper>
        <img src={imageSrc} alt="project photo" />

        <div className="project-info">
          <p>{name}</p>
          <p>
            <a href={url} target="_blank" rel="noreferrer">
              Live
            </a>
          </p>
          <p>
            <a href={repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          </p>
        </div>
      </ProjectWrapper>
    );
  };

  const ProjectCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
      Autoplay({ delay: 4000 }, (emblaRoot) => emblaRoot.parentElement),
    ]);

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
      <Container>
        <CarouselContainer ref={emblaRef}>
          <Carousel>
            {projects.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                url={project.url}
                imageSrc={project.imageSrc}
                repo={project.repo}
              />
            ))}
          </Carousel>
          <CarouselArrow aria-label="previous" onClick={scrollPrev}>
            <svg viewBox="137.718 -1.001 366.563 644">
              <path
                fill="currentColor"
                d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
              />
            </svg>
          </CarouselArrow>
          <CarouselArrow aria-label="next" pos="next" onClick={scrollNext}>
            <svg viewBox="0 0 238.003 238.003">
              <path
                fill="currentColor"
                d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
              />
            </svg>
          </CarouselArrow>
        </CarouselContainer>
      </Container>
    );
  };
  return (
    <ProjectsWrapper id="projects">
      <hr />
      <br />
      <SectionHeader>
        <span>02.</span>
        <h2> Projects</h2>
      </SectionHeader>
      <ProjectCarousel />
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  padding: 2.5rem;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 90%;
  position: relative;
  margin-top: 2rem;
`;

const Carousel = styled.div`
  display: flex;
  user-select: none;
  margin-left: -10px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const ProjectWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 2rem;

  img {
    width: 70%;
    height: auto;
  }
  .project-info {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
    gap: 1.5rem;

    a,
    a:visited,
    a:hover,
    a:focus {
      color: white;
      text-decoration: none;
      cursor: pointer;
    }

    a:hover {
      color: #d24141;
    }
  }
`;

const CarouselArrow = styled.button`
  width: 2rem;
  height: 2rem;

  color: inherit;
  position: absolute;
  left: 0rem;
  top: 50%;
  z-index: 2;
  background-color: transparent;
  font-size: 1rem;
  border-radius: 50%;
  padding-left: 0.1rem;
  border: none;
  border-color: inherit;

  ${(props) =>
    props.pos === "next"
      ? `right: 0rem;
  left: auto;
  padding-right: 0;`
      : ""}

  svg {
    width: 50%;
    height: 50%;
    color: inherit;
  }
`;

export default Projects;
