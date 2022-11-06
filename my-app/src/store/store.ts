import { combineReducers, createStore } from "redux";
import { toggleReduser } from "./redusers/toggleReduser";
const rootReduser = combineReducers({
  mode: toggleReduser,
});

export const store = createStore(rootReduser);
