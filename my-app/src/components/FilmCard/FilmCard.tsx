import { ReactEventHandler, useState } from "react";
import { ICard } from "../../Types/interface";
import style from "./style.module.css";
import image from "./img.png";
export const FilmCard = (props: ICard) => {
  const [img, setImage] = useState<string | null>(props.poster_path);
  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(null);
  };

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
          <p className={style.genres}>{props.genres.join(", ")}</p>
        </div>
      ) : (
        <div className={style.card}>
          <img src={image} className={style.posterImg} />
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.genres}>{props.genres.join(", ")}</p>
        </div>
      )}
    </>
  );
};
