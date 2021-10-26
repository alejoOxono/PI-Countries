import { applyMiddleware, createStore } from "redux";
import rootReduce from "../reduce/rootReduce";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    thunk,
];

const store = createStore(rootReduce, composeWithDevTools(
    applyMiddleware(...middleware)
  ));


export default store