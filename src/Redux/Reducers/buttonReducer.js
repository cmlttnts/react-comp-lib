import { BUTTONS_CANCEL, BUTTON_PRESS, BUTTON_ADD } from "../Actions/buttonActions";
import initState from "../initState";

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case BUTTON_PRESS:
      state = {
        ...state,
      };
      if (state.hasOwnProperty(action.payload)) state[action.payload] = !state[action.payload];
      break;
    case BUTTON_ADD:
      state = {
        ...state,
      };
      state[action.payload] = false;
      break;
    case BUTTONS_CANCEL:
      state = {
        ...state,
      };
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          state[key] = false;
        }
      }
      break;
    default:
      break;
  }

  return state;
};

export default Reducer;
