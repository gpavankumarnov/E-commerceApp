import AppActions from "./types";

export const setThemeValue = (value) => {
  return {
    type: AppActions.SET_THEME,
    payload: value,
  };
};

export const setActiveProduct = (value) => {
  return {
    type: AppActions.SET_ACTIVE_PRODUCT,
    payload: value,
  };
};

export const addToShoppingCart = (value) => {
  return {
    type: AppActions.ADD_PRODUCT_TO_SHOPPING_CART,
    payload: value,
  };
};

export const deleteCartItem = (value) => {
  return {
    type: AppActions.DELETE_CART_ITEM,
    payload: value,
  };
};
export const cartValuesToRevertOnDelete = (value) => {
  return {
    type: AppActions.CART_VALUES_REVERT_ON_DELETE,
    payload: value,
  };
};

export const clearCart = (value) => {
  return {
    type: AppActions.CLEAR_CART,
    payload: value,
  };
};
export const onIncreaseSetQtyOfItem = (value) => {
  return {
    type: AppActions.ON_INCREASE_QTY_ITEM,
    payload: value,
  };
};
export const onDecreaseSetQtyOfItem = (value) => {
  return {
    type: AppActions.ON_DECREASE_QTY_ITEM,
    payload: value,
  };
};
