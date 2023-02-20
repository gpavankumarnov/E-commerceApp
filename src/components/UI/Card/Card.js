import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  background-color: white;
  &:hover {
    box-shadow: 2px 2px 8px 3px rgb(0 0 0 / 25%);
  }
  /* border-color: transparent;
  transition: all 1s linear;
  &:hover {
    border: 0.05rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  } */
`;

const Card = (props) => {
  return <CardWrapper {...props}>{props.children}</CardWrapper>;
};

export default Card;
