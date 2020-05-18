import { createStore } from "redux";
import initState from "./initState";

import buttonReducer from "./Reducers/buttonReducer"; // TODO: Add to snippets

const store = createStore(buttonReducer, initState); // TODO: Add to snippets

export default store;
