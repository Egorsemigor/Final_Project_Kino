import { stringify } from "querystring";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TState } from "../../store/store";
import { FilmList } from "../FilmList/FilmList";

export const LikedFilms = () => {
  const navigate = useNavigate();
  const liked = useSelector((state: TState) => state.filmsReducer.likedFilms);
  localStorage.setItem("like", JSON.stringify(liked));

  // console.log(JSON.stringify(liked))

  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

  return (
    <>
      <FilmList films={liked} onClickFilm={navigateToFilm} />
    </>
  );
};
