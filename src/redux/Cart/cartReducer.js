import axios from "axios";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  loading: false
};

const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const GET_CART = "GET_CART";

export function addItem(item) {
  console.log(item);
  return {
    type: ADD_ITEM,
    payload: axios.post("/api/cart", { item }).then(res => res.data)
    // .catch(err => console.log(err))
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: axios
      .delete(`/api/cart/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err))
  };
}

export const getCart = () => {
  let cartItems = axios.get("/api/cart").then(res => res.data);
  return {
    type: GET_CART,
    payload: cartItems
  };
};

export function toggleCartHidden() {
  return {
    type: TOGGLE_CART_HIDDEN
  };
}

export function cartReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case `${ADD_ITEM}_FULFILLED`:
      console.log(payload);
      return { ...state, cartItems: payload };
    case `${REMOVE_ITEM}_FULFILLED`:
      return { ...state, cartItems: payload };
    case `${GET_CART}_PENDING`:
      return { ...state, loading: true };
    case `${GET_CART}_FULFILLED`:
      return { ...state, cartItems: payload.cart };
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
}

export default cartReducer;
