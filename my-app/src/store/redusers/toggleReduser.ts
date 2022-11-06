const defaultColorMode = {
  mode: false,
};
export const toggleReduser = (
  state = defaultColorMode,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "ADD_MODE":
      return { state, mode: !action.payload };
    default:
      return state;
  }
};
