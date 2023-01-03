import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilms } from "../../fetch/fetchFilms";
import { searchFilms } from "../../fetch/searchFilms";
import { FilmList } from "../FilmList/FilmList";
import { Button } from "../UI/Button/Button";
import { InputSearch } from "../UI/InputSearch/InputSearch";
import style from "./style.module.css";
import loader from "../../assets/img/loader.svg";
import { TState } from "../../store/store";
import { setAllFilms } from "../../store/acrions/actions";
export const AllFilms = () => {
  const films = useSelector((state: TState) => state.filmsReducer.allFilms);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loadMore = (page: number) => {
    fetchFilms(page).then((values) => {
      dispatch(setAllFilms(values.films));
    });
  };

  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number[]>([]);
  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    searchFilms(search)
      .then((values) => {
        dispatch(setAllFilms(values.films));
        console.log("sdmnslr", values.films);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  useEffect(() => {
    setIsLoading(true);
    fetchFilms(1)
      .then((values) => {
        dispatch(setAllFilms(values.films));
        console.log("sdmnslr", values);

        for (let i = 1; i <= values.pagesCount; i++) {
          if (page.length < values.pagesCount) {
            page.push(i);
          }
        }
        console.log("page", page);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const navigateToFilm = (id: number | undefined) => {
    navigate(`/selected/${id}`);
  };

  return (
    <div className={style.container}>
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
        </>
      )}
    </div>
  );
};
