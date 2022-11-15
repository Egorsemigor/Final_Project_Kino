import { combineReducers, createStore } from "redux";
import { ILikeState, filmsReducer } from "./redusers/filmsReducer";
import { modeReducer } from "./redusers/modeReducer";

export type TState = {
  filmsReducer: ILikeState;
};

const rootReducer = combineReducers({
  mode: modeReducer,
  filmsReducer,
});

export let store = createStore(rootReducer);
