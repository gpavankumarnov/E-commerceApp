import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  padding: 1.255rem 1.25rem;
  text-align: center;
  color: green;
`;

const EmptyCart = () => {
  return (
    <Wrapper>
      <Heading>
        Dear customer, your cart is currently empty!
        <br />
        Please add the items.
      </Heading>
    </Wrapper>
  );
};

export default EmptyCart;
