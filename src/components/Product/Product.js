import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styled from "styled-components";
import { addToShoppingCart } from "../../redux/actions/userActions";

const CardFooter = styled.footer`
  padding: 0.3125rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* background: transparent;
  border-top: transparent;
  transition: all 2s linear;

&:hover{
  background: rgba(247, 247, 247);
} */
`;

const Button = styled.button`
  padding: 0.3125rem;
  box-shadow: 2px 2px 5px 3px grey;
  border-radius: 0.5rem 0 0 0;
  font-size: 1.4rem;
  cursor: pointer;
  /* &:hover {
    background-color: lightblue;
    border-color: black;
    box-shadow: 2px 2px 5px 3px grey;
    /* width: 3rem;
    height: 3rem;
    transition: all 2s linear; */
`;

const Product = (props) => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.user.shoppingCart);

  const buttonClick = (cartItem) => {
    //first: get id of an cart item.
    //dispatch to central library.
    //filter with that library and change the values
    const { price } = cartItem;
    const finalCartValue = {
      ...cartItem,
      inCart: true,
      count: 1,
      total: price,
    };
    dispatch(addToShoppingCart(finalCartValue));
  };

  const renderCart = props.inCart ? (
    <p disabled>In Cart</p>
  ) : (
    <ShoppingCartCheckoutIcon />
  );

  return (
    <>
      <Link
        to="./details"
        style={{ textDecoration: "none", padding: "0.3125rem" }}
      >
        <img
          src={props.src}
          height="200"
          width="200"
          onClick={props.onClick}
        ></img>
      </Link>
      <Button
        disabled={props.inCart ? true : false}
        onClick={() => buttonClick(props.onCartClick)}
      >
        {renderCart}
      </Button>
      {/* {card footer} */}
      <CardFooter>
        <h4>{props.title}</h4>
        <span>$ {props.price}</span>
      </CardFooter>
    </>
  );
};

export default Product;
