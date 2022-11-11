import { combineReducers, createStore } from "redux";
import { modeReducer } from "./redusers/modeReducer";
const rootReducer = combineReducers({
  mode: modeReducer,
});
export const store = createStore(rootReducer);
