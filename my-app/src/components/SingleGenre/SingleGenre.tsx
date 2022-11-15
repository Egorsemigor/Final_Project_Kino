import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilmList } from "../../components/FilmList/FilmList";
import { Title } from "../../components/UI/Title/Title";
import { fetchGenres } from "../../fetch/fetchGenres";
import loader from "../../assets/img/loader.svg";
import { useDispatch, useSelector } from "react-redux";
import { TState } from "../../store/store";
import { setAllFilms } from "../../store/acrions/actions";
import style from "./style.module.css";
export const SingleGenre = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();

  const { genre } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (genre) {
      fetchGenres(genre)
        .then((film) => {
          dispatch(setAllFilms(film.data));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [genre]);
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

  return (
    <>
      {typeof genre === "string" ? <Title genre={genre} /> : "Genre"}

      {isLoading ? (
        <div className={style.loader}>
          <img src={loader} />
        </div>
      ) : (
        <FilmList films={films} onClickFilm={navigateToFilm} />
      )}
    </>
  );
};
