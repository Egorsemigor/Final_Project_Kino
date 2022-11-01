import { Footer } from "../Layouts/Footer/Footer";
import { Header } from "../Layouts/Header/Header";
import style from "./style.module.css";
import pic from "./pic.jpg";
import { ICard } from "../../Types/interface";
import { ReactEventHandler, useState } from "react";

export const SelectedFilm = (props: ICard) => {
  const [img, setImage] = useState(props.poster_path);
  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(pic);
  };
  return (
    <>
      <div className={style.selectedFilm}>
        <div className={style.container}>
          <div className={style.flexBlock}>
            <div className={style.firstBlock}>
              <div className={style.tagline}>{props.tagline}</div>

              <img className={style.image} src={img} onError={handleError} />
            </div>
            <div className={style.secondBlock}>
              <h1 className={style.filmTitle}>{props.title}</h1>
              <div className={style.releaseDate}>
                Release date: {props.release_date}
              </div>
              <div className={style.runtime}>Runtime: {props.runtime} min.</div>

              <div className={style.revenue}>
                What is this movie about: {props.overview}
              </div>
              <div className={style.genres}>
                {" "}
                Genres: {props.genres.join(", ")}
              </div>

              <div className={style.rateBubble}>
                <div className={style.ratePlace}>
                  <div className={style.rate}>{props.vote_average}</div>
                </div>
                <div>
                  <div className={style.voteCount}>
                    People voited: {props.vote_count}
                  </div>
                  <div className={style.budget}>Budget: {props.budget} $</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.videoFlex}>
            <video
              className={style.video}
              src="azino.mp4"
              width="740"
              // height="360"
              // poster={pic}
              controls
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};
