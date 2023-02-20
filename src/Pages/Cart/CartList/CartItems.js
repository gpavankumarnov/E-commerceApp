import React, { useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../../redux/actions/userActions";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 1rem;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;

const TotalListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 15rem;
`;

const TotalList = styled.h2`
  padding: 0.3125rem 0;
  font: italic;
`;

const CartItems = () => {
  const shoppingCart = useSelector((state) => state.user.shoppingCart);
  //[{}, {}]
  console.log("shopping", shoppingCart);

  const CartList = shoppingCart.map((cartItem) => (
    <CartItem
      cartImage={cartItem.img}
      cartTitle={cartItem.title}
      cartPrice={cartItem.price}
      cartCount={cartItem.count}
      cartId={cartItem.id}
    />
  ));

  const dispatch = useDispatch();
  const shoppingCartItems = useSelector((state) => state.user.shoppingCart); //[{}, {}]
  const productsList = useSelector((state) => state.user.productsData);

  const subTotal = shoppingCartItems.reduce((initialValue, currentValue) => {
    return initialValue + currentValue.total;
  }, 0);

  const tax = subTotal ? 8 : 0;

  const handleClearCart = () => {
    shoppingCartItems.splice(0, shoppingCartItems.length);

    productsList.map((item) => {
      if (item.inCart === true) {
        console.log(item, item.id); //obj 1
        productsList.splice(item.id - 1, 1, {
          ...item,
          inCart: false,
          count: 0,
          total: 0,
        });
      }
    });

    dispatch(clearCart(productsList));
  };

  return (
    <>
      <Wrapper>
        <ul style={{ width: "100%" }}>{CartList}</ul>
      </Wrapper>
      <TotalListWrapper>
        <Button onClick={handleClearCart}>CLEAR CART</Button>

        <TotalList>SubTotal : $ {subTotal}</TotalList>
        <TotalList>Tax : $ {tax}</TotalList>
        <TotalList>Total : $ {subTotal + tax}</TotalList>
      </TotalListWrapper>
    </>
  );
};

export default CartItems;
