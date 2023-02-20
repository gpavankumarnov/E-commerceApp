import React from "react";
import styled from "styled-components";

const CartColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.25rem;
  & > div {
    width: 20%;
  }
`;

const ColumnTitle = styled.h3`
  padding: 1rem 0;
  /* width: 100%; */
  text-align: center;
  /* padding: 0.625rem 0.625rem; */
`;

const CartColumns = () => {
  return (
    <CartColumnWrapper>
      <div>
        <ColumnTitle>Products</ColumnTitle>
      </div>
      <div>
        <ColumnTitle>Name Of Product</ColumnTitle>
      </div>
      <div>
        <ColumnTitle>Price</ColumnTitle>
      </div>
      <div>
        <ColumnTitle>Quantity</ColumnTitle>
      </div>
      <div>
        <ColumnTitle>Remove</ColumnTitle>
      </div>
      <div>
        <ColumnTitle>Total</ColumnTitle>
      </div>
    </CartColumnWrapper>
  );
};
export default CartColumns;
