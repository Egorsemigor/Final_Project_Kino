import { useEffect, useState } from "react";
import { fetchFilms } from "../../fetch/fetchFilms";
import { ICard } from "../../Types/interface";
import { FilmList } from "../FilmList/FilmList";

export const AllFilms = () => {
  const [films, setFilms] = useState<ICard[]>([]);
  useEffect(() => {
    fetchFilms().then((film) => {
      setFilms(film.data);
      console.log(film.data);
    });
  }, []);

  return (
    <div>
      <FilmList films={films} onClickFilm={() => {}} />
    </div>
  );
};
