const defaultState: { mode: boolean } = {
  mode: true,
};
export const modeReducer = (
  state = defaultState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: !action.payload };
    default:
      return state;
  }
};
