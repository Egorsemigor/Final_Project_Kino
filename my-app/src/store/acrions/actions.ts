import { ICard } from "../../Types/interface";
import { ACTIONS } from "../constants";

export const likeFilm = (film: ICard) => {
  return {
    type: ACTIONS.LIKE_FILM,
    film,
  };
};
export const setAllFilms = (films: ICard[]) => {
  return {
    type: ACTIONS.SET_ALL_FILMS,
    films,
  };
};
