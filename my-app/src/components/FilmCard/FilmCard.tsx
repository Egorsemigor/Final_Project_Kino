import {
  MouseEventHandler,
  ReactEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICard } from "../../Types/interface";
import style from "./style.module.css";
import image from "../../assets/img/img.png";

import { useDispatch, useSelector } from "react-redux";
import { fetchImg } from "../../fetch/fetchImg";
import { ACTIONS } from "../../store/constants";
import { Like } from "../../assets";
import { Context } from "../../App";
import { TState } from "../../store/store";

export const FilmCard = (props: ICard) => {
  const [img, setImage] = useState<string | null>("");
  const { user } = useContext(Context);
  useEffect(() => {
    fetchImg(props.nameEn).then((values) => {
      setImage(values.Poster);
    });
  }, []);
  const dispatch = useDispatch();
  const likePost: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    dispatch({ type: ACTIONS.LIKE_FILM, film: props });
  };
  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(null);
  };
  const mode = useSelector((state: TState) => state.modeReducer.mode);

  return (
    <>
      {props.posterUrl ? (
        <div className={style.card}>
          <span className={style.average}>
            {props.rating || props.ratingImdb || 8.3}
          </span>
          <img
            onError={handleError}
            src={props.posterUrl}
            className={style.posterImg}
          />
          <h2 className={style.title}>{props.nameRu}</h2>
          <p className={style.genres}>
            {props.genres
              ? props.genres.map((item) => item.genre).join(", ")
              : null}
          </p>
          {user ? (
            <div className={style.iconsFlex}>
              <button onClick={likePost}>
                <Like fill={props.liked ? "red" : "white"} />
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={style.card}>
          <span className={style.average}>{props.ratingVoteCount}</span>

          <img src={image} className={style.posterImg} />
          <h2 className={style.title}>{props.nameRu}</h2>
          <p className={style.genres}>
            {props.genres.map((item) => item.genre).join(", ")}
          </p>
          {user ? (
            <div className={style.iconsFlex}>
              <button onClick={likePost}>
                <Like fill={props.liked ? "red" : "white"} />
              </button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};
