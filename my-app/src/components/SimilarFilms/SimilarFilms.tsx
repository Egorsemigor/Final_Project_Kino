import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSimilarGenres } from "../../fetch/fetchGenres";
import { setAllFilms } from "../../store/acrions/actions";
import { TState } from "../../store/store";
import { ICard } from "../../Types/interface";
import { FilmCard } from "../FilmCard/FilmCard";
import style from "./style.module.css";
export const SimilarFilms = (props: ICard) => {
  const [similar, setSimilar] = useState([]);
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchSimilarGenres(Number(param.filmId))
      .then((films) => films.items)
      .then((item) => {
        console.log("nnn", item);
        // setSimilar(item);
        // console.log("similar", similar);

        dispatch(setAllFilms(item));
      });
  }, [props.filmId]);
  console.log("films22", similar);
  return (
    <>
      <h1 className={style.title}>Similar Films</h1>
      <div className={style.similar}>
        {films.map((film: ICard) => {
          const clickFilm = () => {
            if (props.onClickFilm) {
              // props.onClickFilm(film.filmId);
              navigate(`/selected/${film.filmId}`);
            }
          };
          return (
            <div onClick={clickFilm}>
              <FilmCard
                filmId={film.filmId}
                key={film.filmId}
                nameEn={film.nameEn}
                nameRu={film.nameRu}
                // tagline={item.tagline}
                rating={film.rating}
                ratingVoteCount={film.ratingVoteCount}
                year={film.year}
                posterUrl={film.posterUrl}
                filmLength={film.filmLength}
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
