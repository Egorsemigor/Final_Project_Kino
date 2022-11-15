import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilmList } from "../../components/FilmList/FilmList";
import { Title } from "../../components/UI/Title/Title";
import { fetchGenres } from "../../fetch/fetchGenres";
import loader from "../../assets/img/loader.svg";

export const SingleGenre = () => {
  const [genredFilms, setGenredFilms] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { genre } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (genre) {
      fetchGenres(genre)
        .then((film) => {
          setGenredFilms(film.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    console.log(genre);
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
      {typeof genre === "string" ? <Title genre={genre} /> : "Genre"}

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
    </>
  );
};
