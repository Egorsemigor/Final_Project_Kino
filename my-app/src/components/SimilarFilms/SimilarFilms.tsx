import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSimilarGenres } from "../../fetch/fetchGenres";
import { ICard } from "../../Types/interface";
import { FilmCard } from "../FilmCard/FilmCard";
import style from "./style.module.css";
export const SimilarFilms = (props: ICard) => {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    fetchSimilarGenres(props.genres[0])
      .then((films) => {
        return films.data.filter((film: ICard) => film.title !== props.title);
      })
      .then((films) => {
        setSimilar(films);
      });
  }, [props.id]);
  return (
    <>
      <h1>Simular Films</h1>
      <div className={style.similar}>
        {similar.map((film: ICard) => {
          const clickFilm = () => {
            if (props.onClickFilm) {
              props.onClickFilm(film.id);
            }
          };
          return (
            <div onClick={clickFilm}>
              <FilmCard
                id={film.id}
                title={film.title}
                tagline={""}
                vote_average={film.vote_average}
                vote_count={0}
                release_date={""}
                poster_path={film.poster_path}
                overview={""}
                budget={0}
                revenue={0}
                runtime={0}
                genres={film.genres}
                liked={film.liked}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
