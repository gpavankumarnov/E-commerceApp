import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartColumns from "./CartColumns";
import CartItems from "./CartList/CartItems";
import EmptyCart from "./EmptyCart";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  color: black;
  text-align: center;
  padding: 0.3125rem, 0.3125rem;
`;
const Span = styled.span`
  color: blue;
`;
const Cart = () => {
  const shoppingCart = useSelector((state) => state.user.shoppingCart);

  console.log(shoppingCart);
  return (
    <CartWrapper>
      {shoppingCart?.length > 0 ? (
        <>
          <Title>
            Your <Span>Cart</Span>
          </Title>
          <CartColumns />
          <CartItems />
        </>
      ) : (
        <EmptyCart />
      )}
    </CartWrapper>
  );
};
export default Cart;
