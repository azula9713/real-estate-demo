import React from "react";
import styled from "styled-components";
import Button from "./Button";

const InfoSection = ({ item }) => {
  return (
    <InfoContainer reverse={item.reverse}>
      <InfoWrapper>
        <LeftSide reverse={item.reverse}>
          <h1>{item.heading}</h1>
          <p>{item.para}</p>
          <Button to={item.link} primary={!item.reverse}>
            {item.buttonLabel}
          </Button>
        </LeftSide>
        <RightSide reverse={item.reverse}>
          <img src={item.image} alt={item.heading} />
        </RightSide>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;

const InfoContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  background: ${(props) => (props.reverse ? "#000d1a" : "white")};
`;

const InfoWrapper = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.3;
  height: max-content;
  width: 100%;
  padding: 1rem 2rem;
  order: ${(props) => (props.reverse ? "2" : "1")};
  color: ${(props) => (props.reverse ? "white" : "black")};

  h1: {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 4vw, 3.5rem);
  }

  p {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const RightSide = styled.div`
  order: ${(props) => (props.reverse ? "1" : "2")};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: ${(props) => (props.reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
