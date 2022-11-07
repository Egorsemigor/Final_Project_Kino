import { useEffect, useState } from "react";
import { Button } from "../../components/UI/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FilmList } from "../../components/FilmList/FilmList";
import { Title } from "../../components/UI/Title/Title";
import { fetchGenres } from "../../fetch/fetchGenres";
import loader from "./loader1.svg";

export const SingleGenre = () => {
  const [genredFilms, setGenredFilms] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { genre } = useParams();
  useEffect(() => {
    setIsLoading(true)
    if (genre) {
      fetchGenres(genre.slice(1))
        .then((film) => {
          setGenredFilms(film.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [genre]);
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

  const loadMore = () => {
    if (genre) {
      return fetchGenres(genre, genredFilms.length).then((film) => {
        console.log("2)", film);
        setGenredFilms(genredFilms.concat(film.data));
      });
    }
  };

  return (
    <>
      <Title genre={genre?.slice(1)} />
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
        <FilmList films={genredFilms} onClickFilm={navigateToFilm} />
      )}
      {/* <Button
        type={"dontAdaptive"}
        text={"Load more films"}
        onClick={loadMore}
      /> */}
    </>
  );
};
