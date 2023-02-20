import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

import promise from "redux-promise";

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promise))
);

export default reduxStore;
