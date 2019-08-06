import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { uiReducer } from "./reducers/ui";
import { stockReducer } from "./reducers/stock";
import { authReducer } from "./reducers/auth";
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  stock: stockReducer,
  cart: cartReducer,
});

// let composeEnhancers = compose;
// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;