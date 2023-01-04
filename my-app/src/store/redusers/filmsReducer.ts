import { AnyAction } from "redux";
import { ICard } from "../../Types/interface";
import { ACTIONS } from "../constants";

export interface ILikeState {
  likedFilms: ICard[];
  watchLaterFilms: ICard[];
  allFilms: ICard[];
}

const array = localStorage.getItem("like");

const defaultState: ILikeState = {
  likedFilms: array == null ? [] : JSON.parse(array),
  watchLaterFilms: [],
  allFilms: [],
};

export const filmsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.LIKE_FILM:
      const film = action.film;
      const newLikedfilm = film.liked
        ? state.likedFilms.filter((item) => {
            if (item.filmId === film.id) {
              return false;
            } else {
              return true;
            }
          })
        : state.likedFilms.concat([{ ...film, liked: true }]);
      const newAllFilms = state.allFilms.map((film) => {
        if (film.filmId === action.film.id) {
          film.liked = !film.liked;
        }
        return film;
      });
      return {
        ...state,
        likedFilms: newLikedfilm,
        allFilms: newAllFilms,
      };
    case ACTIONS.SET_ALL_FILMS:
      return {
        ...state,
        allFilms: action.films,
      };
    default:
      return state;
  }
};
