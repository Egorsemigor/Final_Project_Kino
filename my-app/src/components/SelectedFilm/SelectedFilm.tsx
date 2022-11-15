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
import { Navigate, useNavigate } from "react-router-dom";
import { fetchSimilarGenres } from "../../fetch/fetchGenres";
import { FilmCard } from "../FilmCard/FilmCard";
import { SimilarFilms } from "../SimilarFilms/SimilarFilms";

export const SelectedFilm = (props: ICard) => {
  const [img, setImage] = useState("");
  const [imdbID, setImdbID] = useState("");
  const [trailer, setTrailer] = useState("");
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    fetchImg(props.title).then((values) => {
      setImage(values.Poster);
      setImdbID(values.imdbID);
    });
    fetchSimilarGenres(props.genres[0])
      .then((films) => {
        return films.data.filter((film: ICard) => film.title !== props.title);
      })
      .then((films) => {
        setSimilar(films);
        // console.log(films);
      });
  }, []);
  useEffect(() => {
    fetchTrailer(imdbID).then((values) => {
      setTrailer(values.linkEmbed);
      console.log(values.linkEmbed);
    });
  }, [imdbID]);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(pic);
  };
  const navigate = useNavigate();
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
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
              <div
                onClick={() => {
                  navigate(-1);
                }}
                className={style.arrow}
              ></div>
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
              <iframe
                allowFullScreen={true}
                src={`${trailer}?width=1850`}
                width="850"
                height="540"
              />
            ) : (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=K7e3jpYf28I`}
              />
            )}
          </div>
          <SimilarFilms
            id={props.id}
            title={props.title}
            tagline={""}
            vote_average={props.vote_average}
            vote_count={0}
            release_date={""}
            poster_path={""}
            overview={""}
            budget={0}
            revenue={0}
            runtime={0}
            genres={props.genres}
            onClickFilm={navigateToFilm}
          />
        </div>
      </div>
    </>
  );
};
