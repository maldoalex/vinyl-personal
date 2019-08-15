import axios from "axios";

const intitialState = {
  orders_id: "",
  users_id: "",
  hardware_id: ""
};

const ORDER = "ORDER";

export function order(orders_id, users_id, hardware_id) {
  let data = axios.post("/api/order", {
    orders_id,
    users_id,
    hardware_id
  });
  return {
    type: ORDER,
    payload: data
  };
}

function reducer(state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ORDER:
      return {
        ...state,
        orders_id: payload.data,
        users_id: payload.data,
        hardware_id: payload.data
      };
    default:
      return state;
  }
}

export default reducer;
