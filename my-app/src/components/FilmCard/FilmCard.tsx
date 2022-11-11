import { ReactEventHandler, useEffect, useState } from "react";
import { ICard } from "../../Types/interface";
import style from "./style.module.css";
import image from "./img.png";
import { useSelector } from "react-redux";
import { setSyntheticLeadingComments } from "typescript";
import { fetchImg } from "../../fetch/fetchImg";
export const FilmCard = (props: ICard) => {
  const [img, setImage] = useState<string | null>("");
  useEffect(() => {
    fetchImg(props.title).then((values) => {
      setImage(values.Poster);
    });
  }, []);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(null);
  };
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );
  return (
    <>
      {img ? (
        <div className={style.card}>
          <span className={style.average}>{props.vote_average}</span>
          <img onError={handleError} src={img} className={style.posterImg} />
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.genres}>{props.genres.join(", ")}</p>
        </div>
      ) : (
        <div className={style.card}>
          <span className={style.average}>{props.vote_average}</span>

          <img src={image} className={style.posterImg} />
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.genres}>{props.genres.join(", ")}</p>
        </div>
      )}
    </>
  );
};
