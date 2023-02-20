import React from "react";
import AppBar from "@mui/material/AppBar";
import Logo from "./Logo";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Button from "../UI/Button/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { setThemeValue } from "../../redux/actions/userActions";

const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;

  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 85%);
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const List = styled.li`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

const NavBar = (props) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.user.themeValue);

  const changeTheme = () => {
    if (theme === "light") {
      dispatch(setThemeValue("dark"));
    } else {
      dispatch(setThemeValue("light"));
    }
  };

  return (
    <AppBar
      sx={{
        boxShadow: "0px 0px 0px ",
        position: "static",
        height: "4rem",
        width: "100%",
        backgroundColor: theme === "light" ? "#e20074" : "#72729D",
      }}
    >
      <Toolbar
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FirstSection>
          <Link to="/" style={{ height: "100%" }}>
            <Logo />
          </Link>

          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Products
          </Typography>
        </FirstSection>
        <Nav>
          <UL>
            <List>
              <DarkModeIcon onClick={changeTheme} />
            </List>
            <List>
              <Link to="/cart">
                <Button
                  style={{
                    color: "inherit",
                    padding: "0.5rem",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "0.5rem",
                  }}
                >
                  <ShoppingCartIcon />
                  Cart
                </Button>
              </Link>
            </List>
          </UL>
        </Nav>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
