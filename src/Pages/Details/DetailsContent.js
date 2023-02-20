import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button/Button";

const Content = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
`;

const Model = styled.h2`
  padding: 1rem 0rem;
  text-align: justify;
`;

const Made = styled.h4`
  padding: 0.3125rem 0;
  text-align: left;
`;

const Price = styled.h4`
  color: blue;
  padding: 0.3125rem 0;
`;

const Info = styled.p`
  text-align: justify;
  padding: 0.5rem 0;
`;

const ButtonContainer = styled.button`
  padding: 1rem;
  background-color: lightblue;
  border-color: white;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
    border-color: black;
  }
`;

const DetailsContent = () => {
  const activeProductDetails = useSelector((state) => state.user.activeProduct);

  return (
    <Content>
      <Model>Model : {activeProductDetails?.title}</Model>
      <Made>
        MADE BY : <span>{activeProductDetails?.company}</span>
      </Made>
      <Price>
        <span>
          <strong style={{ fontSize: "1.25rem" }}>
            Price : <span>$</span>
            {activeProductDetails?.price}
          </strong>
        </span>
      </Price>
      <p>
        <b>Some Info About Product :</b>
      </p>
      <Info>{activeProductDetails?.info}</Info>
      {/* Buttons here */}
      <Link to="/">
        <ButtonContainer>Back To Products</ButtonContainer>
      </Link>
    </Content>
  );
};
export default DetailsContent;
