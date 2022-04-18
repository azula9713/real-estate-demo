import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

import Button from "./Button";

const HeroSection = ({ slides }) => {
  const length = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const timeout = useRef(null);

  function nextSlide() {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    clearTimeout(timeout.current);
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  }

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(nextSlide, 3000);

    return () => clearTimeout(timeout.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, length]);

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <SectionContainer>
      <HeroWrapper>
        {slides?.map((slide, index) => (
          <HeroSlide key={index}>
            {index === currentSlide && (
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    to={slide.path}
                    primary
                    style={{
                      maxWidth: "160px",
                    }}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrewArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </SectionContainer>
  );
};

export default HeroSection;

const arrowButtons = css`
  height: 50px;
  width: 50px;
  color: white;
  cursor: pointer;
  background: #000d1a;
  border-radius: 100%;
  padding: 10px;
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;
  user-select: none;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const SectionContainer = styled.section`
  height: calc(100vh - 60px);
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    opacity: 0.5;
    overflow: hidden;
    //add linear-gradient background
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: calc(100%-100px);
  color: white;
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    font-size: clamp(1.2rem, 4vw, 2.5rem);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 10;
  display: flex;
`;

const PrewArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
