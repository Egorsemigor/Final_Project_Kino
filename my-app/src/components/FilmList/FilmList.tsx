import style from "./style.module.css";
import { ICard } from "../../Types/interface";
import { FilmCard } from "../FilmCard/FilmCard";
export interface IList {
  films: ICard[];
  onClickFilm: (id: number) => void;
}
export const FilmList = ({ films, onClickFilm }: IList) => {
  return (
    
    <div className={style.container}>
      <div className={style.adaptiveGrid}>
        {films.map((item) => {
          const clickFilm = () => {
            const id = item.filmId ? item.filmId : item.kinopoiskId;
            if (id) {
              onClickFilm(id);
            }
          };
          return (
            <div onClick={clickFilm}>
              <FilmCard
                filmId={item.filmId}
                key={item.filmId}
                nameEn={item.nameEn}
                nameRu={item.nameRu}
                rating={item.rating}
                ratingImdb={item.ratingImdb}
                ratingVoteCount={item.ratingVoteCount}
                year={item.year}
                posterUrl={item.posterUrl}
                filmLength={item.filmLength}
                genres={item.genres}
                liked={item.liked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
