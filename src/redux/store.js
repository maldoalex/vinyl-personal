import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import cartReducer from "./Cart/cartReducer";
import userReducer from "./user/userReducer";
import orderReducer from "./Order/orderReducer";
import promise from "redux-promise-middleware";

const middlewares = [logger, promise];

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  order: orderReducer
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
