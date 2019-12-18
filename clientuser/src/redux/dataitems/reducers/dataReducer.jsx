import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_REQUEST,
  ADD_TO_CART,
  CHECKOUT_SUCCESS,
  CHECKOUT_REQUEST
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  items: [],
  selected: [],
  showReceipt: false,
  receipt: {
    purchasedItemDetails: [],
    totalAmount: 0
  }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_ITEMS_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        items: data,
        isLoading: false,
        receipt: {},
        showReceipt: false
      };

    case ADD_TO_CART:
      const newItem = action.payload;
      let selectedItems = [];
      let dupl = false;
      state.selected.map(item => {
        if (item.id === newItem.id) {
          dupl = true;
          item.quantity++;
        }
        selectedItems.push(item);
      });
      if (!dupl) {
        const item = newItem;
        item.quantity = 1;
        selectedItems.push(item);
      }
      return {
        ...state,
        selected: selectedItems,
        showReceipt: false
      };
    case CHECKOUT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CHECKOUT_SUCCESS:
      let cleared = [];
      const receipt = action.payload;
      return {
        ...state,
        selected: cleared,
        isLoading: false,
        showReceipt: true,
        receipt: receipt
      };

    default:
      return state;
  }
};
