import {
  MouseEventHandler,
  ReactEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICard } from "../../Types/interface";
import style from "./style.module.css";
import image from "./img.png";
import { useDispatch, useSelector } from "react-redux";
import { setSyntheticLeadingComments } from "typescript";
import { fetchImg } from "../../fetch/fetchImg";
import { ACTIONS } from "../../store/constants";
import { Like, Watch } from "../../assets";
import { Context } from "../../App";

export const FilmCard = (props: ICard) => {
  const [img, setImage] = useState<string | null>("");
  const { user } = useContext(Context);
  useEffect(() => {
    fetchImg(props.title).then((values) => {
      setImage(values.Poster);
    });
  }, []);
  const dispatch = useDispatch();
  const likePost: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    console.log("1", props.liked);
    dispatch({ type: ACTIONS.LIKE_FILM, film: props });
  };
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
          <span className={style.average}>{props.vote_average}</span>

          <img src={image} className={style.posterImg} />
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.genres}>{props.genres.join(", ")}</p>
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
