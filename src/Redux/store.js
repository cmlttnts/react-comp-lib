import { createStore } from "redux";
import initState from "./initState";

import buttonReducer from "./Reducers/buttonReducer";

const store = createStore(buttonReducer, initState);

export default store;
