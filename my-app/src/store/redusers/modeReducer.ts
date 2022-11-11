const defaultState: { mode: boolean } = {
  mode: localStorage.getItem("mode") === "false" ? false : true,
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
