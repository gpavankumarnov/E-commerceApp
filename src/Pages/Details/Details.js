import React from "react";
// import { storeProducts } from "../../storeData/data";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailsContent from "./DetailsContent";

const Section = styled.section`
  text-align: center;
  width: 80%;
  box-sizing: border-box;
  margin: 1rem auto;
  /* border: 2px solid; */
  padding: 1rem;
  height: 100%;
`;

const Header = styled.div`
  height: 3rem;
  /* border: 2px solid; */
`;

const Title = styled.h1`
  font-size: 2rem;
  height: 100%;
`;

const Main = styled.main`
  /* border: 2px solid; */

  display: flex;
  height: calc(100% - 3rem);

  align-items: center;
`;

const ImageContainer = styled.div`
  /* border: 2px solid; */
  height: 90%;
  width: 40%;
  display: flex;
  align-items: center;
  margin: auto;
`;

const Details = () => {
  const activeProductDetails = useSelector((state) => state.user.activeProduct);

  return (
    <Section>
      {/* {header title details} */}
      <Header>
        <Title>{activeProductDetails?.title}</Title>
      </Header>
      <Main>
        <ImageContainer>
          <img
            height="300px"
            width="300px"
            src={activeProductDetails?.img}
            margin="auto"
          ></img>
        </ImageContainer>

        <DetailsContent />
      </Main>
    </Section>
  );
};

export default Details;
