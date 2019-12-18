import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS
} from "./actionTypes";

const url = "http://localhost:8080/shoppingcart/user/home/getitems";
const checkoutURL = "http://localhost:8080/shoppingcart/user/home/checkout";

const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST
  };
};

const fetchItemsSuccess = data => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: data
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const checkoutRequest = () => {
  return {
    type: CHECKOUT_REQUEST
  };
};

export const checkoutSuccess = receipt => {
  return {
    type: CHECKOUT_SUCCESS,
    payload: receipt
  };
};

export const fetchItems = () => {
  return dispatch => {
    dispatch(fetchItemsRequest());
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchItemsSuccess(data));
      });
  };
};

export const checkout = selectedItems => {
  return dispatch => {
    dispatch(checkoutRequest());
    fetch(checkoutURL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selectedItems
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(checkoutSuccess(data));
      });
  };
};
