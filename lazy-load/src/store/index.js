import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ImagesReducer from "./reducer/ImagesReducer";
import DataReducer from "./reducer/DataReducer";

const reducer = combineReducers({
  ImagesReducer,
  DataReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
