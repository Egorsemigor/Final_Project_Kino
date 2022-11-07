import { Footer } from "../Layouts/Footer/Footer";
import { Header } from "../Layouts/Header/Header";
import style from "./style.module.css";
import pic from "./pic.jpg";
import { ICard } from "../../Types/interface";
import { ReactEventHandler, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchImg } from "../../fetch/fetchImg";

import { fetchTrailer } from "../../fetch/fetchTrailer";
import Iframe from "react-iframe";
import IframeResizer from "iframe-resizer-react";

export const SelectedFilm = (props: ICard) => {
  const [img, setImage] = useState("");
  const [imdbID, setImdbID] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    fetchImg(props.title).then((values) => {
      setImage(values.Poster);
      setImdbID(values.imdbID);
    });
  }, []);
  useEffect(() => {
    fetchTrailer(imdbID).then((values) => {
      setTrailer(values.linkEmbed);
    });
  }, [imdbID]);


  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(pic);
  };

  // const [screenSize, getDimension] = useState({
  //   dynamicWidth: window.innerWidth,
  //   dynamicHeight: window.innerHeight,
  // });
  // const setDimension = () => {
  //   getDimension({
  //     dynamicWidth: window.innerWidth,
  //     dynamicHeight: window.innerHeight,
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", setDimension);

  //   return () => {
  //     window.removeEventListener("resize", setDimension);
  //   };
  // }, [screenSize]);
  // console.log(screenSize.dynamicWidth);
  return (
    <>
      <div className={style.selectedFilm}>
        <div className={style.container}>
          <div className={style.flexBlock}>
            <div className={style.firstBlock}>
              <div className={style.tagline}>{props.tagline}</div>
              {img ? (
                <img className={style.image} src={img} onError={handleError} />
              ) : (
                <img className={style.image} src={pic} onError={handleError} />
              )}
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

            {trailer ? (
              // <iframe
              //   className={style.trailer}
              //   src={`${trailer}`}

              //   allowFullScreen={true}
              // ></iframe>
              <Iframe
                width={`320px`}
                height="320px"
                url={`${trailer}?width=320px`}
              />
            ) : (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=K7e3jpYf28I`}
              />
            )}

          </div>
        </div>
      </div>
    </>
  );
};
