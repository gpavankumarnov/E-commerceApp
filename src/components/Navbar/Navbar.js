import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";

const Header = styled.nav`
  height: 4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
`;

const ULlist = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 10px;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Header>
      <ULlist>
        <Link to="/">
          <HomeIcon style={{ height: "50rem" }} />
        </Link>

        <li style={{ listStyleType: "none" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.5625rem",
              color: "white",
            }}
          >
            Products
          </Link>
        </li>
      </ULlist>
      <Link
        to="/cart"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        <ShoppingCartIcon />
        <Button>My Cart</Button>
      </Link>
    </Header>
  );
};
export default Navbar;
