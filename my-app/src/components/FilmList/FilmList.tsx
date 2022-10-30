import style from "./style.module.css";
import { ICard } from "../../Types/interface";
import { FilmCard } from "../FilmCard/FilmCard";
interface IList {
  films: ICard[];
  onClickFilm: (id: number) => void;
}
export const FilmList = ({ films, onClickFilm }: IList) => {
  return (
    <div className={style.container}>
      <div className={style.adaptiveGrid}>
        {films.map((item) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </div>
  );
};
