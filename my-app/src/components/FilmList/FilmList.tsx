import style from "./style.module.css";
import { ICard } from "../../Types/interface";
import { FilmCard } from "../FilmCard/FilmCard";
import { useNavigate } from "react-router-dom";
export interface IList {
  films: ICard[];
  onClickFilm: (id: number) => void;
}
export const FilmList = ({ films, onClickFilm }: IList) => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.adaptiveGrid}>
        {films.map((item) => {
          const clickFilm = () => {
            onClickFilm(item.id);
          };
          return (
            <div onClick={clickFilm}>
              <FilmCard
                id={item.id}
                key={item.id}
                title={item.title}
                tagline={item.tagline}
                vote_average={item.vote_average}
                vote_count={item.vote_count}
                release_date={item.release_date}
                poster_path={item.poster_path}
                overview={item.overview}
                budget={item.budget}
                revenue={item.revenue}
                runtime={item.runtime}
                genres={item.genres}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
