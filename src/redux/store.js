import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
// import { persistStore } from "redux-persist";
import cartReducer from "./Cart/cartReducer";
import userReducer from "./user/userReducer";
import promise from "redux-promise-middleware";

const middlewares = [logger, promise];

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export const persistor = persistStore(store);
// export default { store, persistor };
