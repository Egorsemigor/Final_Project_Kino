import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilms } from "../../fetch/fetchFilms";
import { searchFilms } from "../../fetch/searchFilms";
import { ICard } from "../../Types/interface";
import { Burger } from "../Burger/Burger";
import { FilmList } from "../FilmList/FilmList";
import { SelectedFilm } from "../SelectedFilm/SelectedFilm";
import { Button } from "../UI/Button/Button";
import { Carusel } from "../UI/Caurusel/Caurusel";
import { InputSearch } from "../UI/InputSearch/InputSearch";
import style from "./style.module.css";
import loader from "./loader1.svg";
import { TState } from "../../store/store";
import { setAllFilms } from "../../store/acrions/actions";
export const AllFilms = () => {
  // const [films, setFilms] = useState<ICard[]>([]);
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetchFilms(film.len).then((film) => {
  //     setFilms(film.data);
  //     console.log(film.data);
  //   });
  // }, []);
  const loadMore = () => {
    return fetchFilms(films.length, search).then((film) => {
      // setFilms(films.concat(film.data));
      dispatch(setAllFilms(films.concat(film.data)));
    });
  };

  ///
  const [search, setSearch] = useState("");
  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    searchFilms(search)
      .then((values) => {
        // setFilms(values.data);
        dispatch(setAllFilms(values.data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);
  ///
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

  return (
    <div>
      <div className={style.inputSearch}>
        <InputSearch
          value={search}
          placeholder={"Search for film..."}
          onChange={handleInput}
        />
      </div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={loader} />
        </div>
      ) : (
        <>
          <FilmList films={films} onClickFilm={navigateToFilm} />
          <div className={style.buttonLoadMore}>
            <Button
              type={"dontAdaptive"}
              text={"Load more films"}
              onClick={loadMore}
            />
          </div>
        </>
      )}
    </div>
  );
};
