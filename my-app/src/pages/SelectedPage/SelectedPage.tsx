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
      `https://reactjs-cdp.herokuapp.com/movies/${params.filmId}`
    );
    promise
      .then((response) => response.json())
      .then((values) => {
        setFilm(values);
        
      });
  }, [params.filmId]);
  return (
    <>
      <Header />
      {film ? <SelectedFilm {...film} /> : null}
      <Footer />
    </>
  );
};
