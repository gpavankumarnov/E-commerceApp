import React from "react";
import styled from "styled-components";
import Card from "../../components/UI/Card/Card";
import { storeProducts } from "../../storeData/data";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import AppActions, { setActiveProduct } from "../../redux/actions/userActions";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  height: calc(100vh - 4rem);
`;

const Title = styled.h1`
  text-align: center;
  padding: 2rem;
`;

const ProductWrapper = styled.div`
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme};
`;

const ProductList = () => {
  const productsData = useSelector((state) => state.user.productsData);
  const theme = useSelector((state) => state.user.themeValue);

  const dispatch = useDispatch();

  const onProductClick = (product) => {
    dispatch(setActiveProduct(product));
  };

  const ProductImage = (
    <ul
      style={{
        display: "flex",
        gap: "5rem",
        flexWrap: "wrap",
      }}
    >
      {productsData.map((item) => (
        <li
          key={item.id}
          style={{
            listStyleType: "none",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card onClick={() => onProductClick(item)}>
            <Product
              src={item.img}
              title={item.title}
              inCart={item.inCart}
              price={item.price}
              onCartClick={item}
            />
          </Card>
        </li>
      ))}
    </ul>
  );

  return (
    <Wrapper style={{ backgroundColor: theme === "light" ? "white" : "" }}>
      {/* <Title>Our Products</Title> */}
      <ProductWrapper>{ProductImage}</ProductWrapper>
    </Wrapper>
  );
};

// ProductList.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   inCart: PropTypes.bool.isRequired,
//   src: PropTypes.string.isRequired,
// };

export default ProductList;
