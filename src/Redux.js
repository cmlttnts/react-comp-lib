import { createStore } from "redux";
const initState = {
  result: 0,
  smt: "asd",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      state.result += 1;
      break;
    case "SUB":
      state.result -= 1;
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Store Updated: ", store.getState());
});

store.dispatch({
  type: "ADD",
});

store.dispatch({
  type: "SUB",
});
