import { combineReducers, createStore } from "redux";
import { ILikeState, filmsReducer } from "./redusers/filmsReducer";
import { IMode, modeReducer } from "./redusers/modeReducer";

export type TState = {
  filmsReducer: ILikeState;
  modeReducer: IMode;
};

const rootReducer = combineReducers({
  modeReducer,
  filmsReducer,
});

export let store = createStore(rootReducer);
