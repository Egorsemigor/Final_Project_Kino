import { Footer } from "../Layouts/Footer/Footer";
import { Header } from "../Layouts/Header/Header";
import style from "./style.module.css";
import pic from "./pic.jpg";
import { ICard } from "../../Types/interface";
import { ReactEventHandler, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchImg } from "../../fetch/fetchImg";

export const SelectedFilm = (props: ICard) => {
  const [img, setImage] = useState("");
  useEffect(() => {
    fetchImg(props.title).then((values) => {
      setImage(values.Poster);
      console.log(values);
    });
  }, []);
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
            <ReactPlayer
              width={"80vw"}
              height={"50vh"}
              controls
              url="https://www.youtube.com/watch?v=K7e3jpYf28I"
            />
          </div>
        </div>
      </div>
    </>
  );
};
