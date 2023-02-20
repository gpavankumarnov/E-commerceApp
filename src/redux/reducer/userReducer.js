import React from "react";
import AppActions from "../actions/types";
import ImageStore from "../../assets/images";

const initialState = {
  themeValue: "light",
  productsData: [
    {
      id: 1,
      title: "Google Pixel - Black",
      img: ImageStore.googlePixel,
      price: 10,
      company: "GOOGLE",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 2,
      title: "Samsung S7",
      img: ImageStore.samsungGalaxy,
      price: 16,
      company: "SAMSUNG",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 3,
      title: "HTC 10 - Black",
      img: ImageStore.htcBlack,
      price: 8,
      company: "htc",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 4,
      title: "HTC 10 - White",
      img: ImageStore.htcWhite,
      price: 18,
      company: "htc",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 5,
      title: "HTC Desire 626s",
      img: ImageStore.htcDesire,
      price: 24,
      company: "htc",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 6,
      title: "Vintage Iphone",
      img: ImageStore.vintageIphone,
      price: 17,
      company: "apple",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 7,
      title: "Iphone 7",
      img: ImageStore.iphone7,
      price: 30,
      company: "apple",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 8,
      title: "Smashed Iphone",
      img: ImageStore.smashedIphone,
      price: 2,
      company: "apple",
      info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
  activeProduct: {},
  shoppingCart: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AppActions.SET_THEME: {
      return {
        ...state,
        themeValue: action.payload,
      };
    }
    case AppActions.SET_ACTIVE_PRODUCT: {
      return {
        ...state,
        activeProduct: action.payload,
      };
    }
    case AppActions.ADD_PRODUCT_TO_SHOPPING_CART: {
      const updateShoppingCart = [...state.productsData];

      const indexValue = updateShoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedProductsData = updateShoppingCart.splice(
        indexValue,
        1,
        action.payload
      );

      const shoppingCartData = [...state.shoppingCart];

      shoppingCartData.push(action.payload);

      return {
        ...state,
        productsData: [...updateShoppingCart],
        shoppingCart: shoppingCartData,
      };
    }
    case AppActions.DELETE_CART_ITEM: {
      console.log("action.payload value is", action.payload);

      const itemToDelete = state.shoppingCart.filter(
        (cartItem) => cartItem.id !== action.payload
      );

      return {
        ...state,
        shoppingCart: itemToDelete,
      };
    }
    case AppActions.CART_VALUES_REVERT_ON_DELETE: {
      const productsList = state.productsData;

      const filteredDeleteItem = productsList.filter(
        (cartItem) => cartItem.id === action.payload
      );
      //[{}]
      const finalCartValue = {
        ...filteredDeleteItem[0],
        inCart: false,
        count: 0,
        total: 0,
      };

      const index = productsList.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      //indexNum

      productsList.splice(index, 1, finalCartValue);

      return {
        ...state,
        productsData: productsList,
      };
    }
    case AppActions.CLEAR_CART: {
      return {
        ...state,
        productsData: [...action.payload],
      };
    }
    case AppActions.ON_INCREASE_QTY_ITEM: {
      return {
        ...state,
        shoppingCart: action.payload,
      };
    }
    case AppActions.ON_DECREASE_QTY_ITEM: {
      return {
        ...state,
        shoppingCart: action.payload,
      };
    }
  }

  return state;
};

export default userReducer;
