//BUTTON ACTIONS
export const BUTTON_PRESS = "BUTTON_PRESS";
export const BUTTON_ADD = "BUTTON_ADD";
export const BUTTONS_CANCEL = "BUTTONS_CANCEL";

export const pressButton = (uKey) => ({
  type: BUTTON_PRESS,
  payload: uKey,
});

export const pressCancel = () => ({
  type: BUTTONS_CANCEL,
  payload: null,
});

export const addButton = (uKey) => ({
  type: BUTTON_ADD,
  payload: uKey,
});
