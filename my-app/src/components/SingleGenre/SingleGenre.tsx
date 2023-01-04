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
import { genresArr } from "../Burger/genresArr";
import { Button } from "../UI/Button/Button";
export const SingleGenre = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [genredFilms, setGenredFilms]=useState([])
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number[]>([]);
  const { genre } = useParams();
  const loadMore = (page: number) => {
    if (genre) {
      fetchGenres(Number(genre), page)
        .then((film) => {
          dispatch(setAllFilms(film.items));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    setIsLoading(true);
    if (genre) {
      fetchGenres(Number(genre), 1)
        .then((film) => {
          dispatch(setAllFilms(film.items));
          for (let i = 1; i <= film.totalPages; i++) {
            if (page.length < film.totalPages) {
              page.push(i);
            }
          }
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
      {typeof genre === "string" ? (
        <Title genre={genresArr[Number(genre) - 1]} />
      ) : (
        "Genre"
      )}

      {isLoading ? (
        <div className={style.loader}>
          <img src={loader} />
        </div>
      ) : (
        <div>
          <FilmList films={films} onClickFilm={navigateToFilm} />
          <div className={style.buttonLoadMore}>
            {page.map((item) => {
              return (
                <Button
                  type={"adaptive"}
                  text={`${item}`}
                  onClick={() => {
                    loadMore(item);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
