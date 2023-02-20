import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  cartValuesToRevertOnDelete,
  onIncreaseSetQtyOfItem,
} from "../../../redux/actions/userActions";

const Wrapper = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  height: 15rem;
  border: 2px solid;

  & > div {
    /* padding: 2rem; */
    /* margin-right: 2rem; */
    /* margin: auto; */
    width: 20%;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  cursor: pointer;
  /* justify-content: space-between; */
  align-items: center;

  & > button {
    padding: 1rem;
    margin: 5px;
  }
`;

const Span = styled.span`
  padding: 1rem;
  border: 2px solid;
`;

const Image = styled.img`
  padding: 1rem 0rem;
  text-align: justify;
`;

const Text = styled.h4`
  padding: 1rem 0rem;
  text-align: justify;
`;

const DeleteButton = styled.div`
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;

const useStyles = makeStyles({
  button: {
    "&:hover": {
      borderRadius: "5px",
      padding: "0.625rem",
      backgroundColor: "#948fd8",
    },
  },
});

const CartItem = (props) => {
  const { cartId, cartImage, cartTitle, cartPrice, cartCount } = props;

  const classes = useStyles();

  const shoppingCartData = useSelector((state) => state.user.shoppingCart);
  const dispatch = useDispatch();

  const onHandleIncreaseItemQty = (cartId) => {
    shoppingCartData.map((item) => {
      if (item.id === cartId) {
        shoppingCartData.splice(item, 1, {
          ...item,
          count: ++item.count,
          total: item.count * item.price,
        });
      }
    });
    dispatch(onIncreaseSetQtyOfItem(shoppingCartData));
  };
  const onHandleDecreaseItemQty = (cartId) => {
    shoppingCartData.map((item) => {
      if (item.id === cartId) {
        shoppingCartData.splice(item, 1, {
          ...item,
          count: item.count >= 2 ? --item.count : 1,
          total: item.count * item.price,
        });
      }
    });
    dispatch(onIncreaseSetQtyOfItem(shoppingCartData));
  };

  const handleCartItemDelete = (cartId) => {
    dispatch(deleteCartItem(cartId));

    dispatch(cartValuesToRevertOnDelete(cartId));
  };

  return (
    <li style={{ listStyleType: "none", width: "100%" }}>
      <Wrapper>
        <div>
          <Image src={cartImage} height="200px" width="200px" />
        </div>
        <div>
          <Text>{cartTitle}</Text>
        </div>
        <div>
          <Text>
            <b>$ {cartPrice}</b>
          </Text>
        </div>
        <QuantityWrapper>
          <button onClick={() => onHandleIncreaseItemQty(cartId)}>+</button>
          <button>{cartCount}</button>
          <button onClick={() => onHandleDecreaseItemQty(cartId)}>-</button>
        </QuantityWrapper>
        <DeleteButton>
          <DeleteIcon
            style={{ cursor: "pointer" }}
            fontSize="large"
            className={classes.button}
            onClick={() => handleCartItemDelete(cartId)}
          />
        </DeleteButton>
        <div>
          <strong>
            <p>Item total : $ {cartPrice * cartCount} </p>
          </strong>
        </div>
      </Wrapper>
    </li>
  );
};

export default CartItem;
