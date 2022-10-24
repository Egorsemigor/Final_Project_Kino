import { ReactEventHandler, useState } from "react";
import { ICard } from "../../Types/interface";
import style from "./style.module.css";
export const FilmCard = (props: ICard) => {
  const [img, setImage] = useState<string | null>(props.poster_path);
  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(null);
  };
  // const [genres, setGenres] = useState([]);
  console.log(props.genres);
  return (
    <>
      {img ? (
        <div className={style.card}>
          <img
            onError={handleError}
            src={props.poster_path}
            className={style.posterImg}
          />
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.genres}>
            {props.genres.join(', ')}
          </p>
        </div>
      ) : (
        img
      )}
    </>
  );
};
