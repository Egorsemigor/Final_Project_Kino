import { ChangeEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilms } from "../../fetch/fetchFilms";
import { searchFilms } from "../../fetch/searchFilms";
import { ICard } from "../../Types/interface";
import { FilmList } from "../FilmList/FilmList";
import { SelectedFilm } from "../SelectedFilm/SelectedFilm";
import { Button } from "../UI/Button/Button";
import { Carusel } from "../UI/Caurusel/Caurusel";
import { InputSearch } from "../UI/InputSearch/InputSearch";
import style from "./style.module.css";
export const AllFilms = () => {
  const [films, setFilms] = useState<ICard[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchFilms().then((film) => {
      setFilms(film.data);
      console.log(film.data);
    });
  }, []);
  const loadMore = () => {
    return fetchFilms(films.length).then((film) => {
      setFilms(films.concat(film.data));
    });
  };

  ///
  const [search, setSearch] = useState("");
  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    searchFilms(search).then((values) => {
      setFilms(values.data);
    });
  }, [search]);
  ///
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );
  return (
    <div>
      <div className={style.inputSearch}>
        <InputSearch
          value={search}
          placeholder={"Search for film..."}
          onChange={handleInput}
        />
      </div>
      <Carusel />

      <FilmList films={films} onClickFilm={navigateToFilm} />
      <div className={style.buttonLoadMore}>
        <Button
          type={"dontAdaptive"}
          text={"Load more films"}
          onClick={loadMore}
        />
      </div>
    </div>
  );
};
