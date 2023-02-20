import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import Details from "./Pages/Details/Details";
import Cart from "./Pages/Cart/Cart";

import NavBar from "./components/Header/NavBar";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./styles/customTheme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <NavBar />
        <Routes>
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/" element={<ProductList />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
