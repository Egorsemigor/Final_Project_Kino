import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Layouts/Footer/Footer";
import { Header } from "../../components/Layouts/Header/Header";
import { SelectedFilm } from "../../components/SelectedFilm/SelectedFilm";
import { ICard } from "../../Types/interface";

export const SelectedPage = () => {
  const [film, setFilm] = useState<ICard | null>(null);
  const params = useParams();
  useEffect(() => {
    const promise = fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.filmId}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
          "Content-Type": "application/json",
        },
      }
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setFilm(values);
        console.log("film");
      });
  }, [params.filmId]);
  console.log("film", film);
  return (
    <>
      <Header />
      {film ? <SelectedFilm {...film} /> : null}
      <Footer />
    </>
  );
};
