import style from "./style.module.css";
import pic from "../../assets/img/pic.jpg";
import { ICard } from "../../Types/interface";
import { ReactEventHandler, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchImg } from "../../fetch/fetchImg";
import { fetchTrailer } from "../../fetch/fetchTrailer";
import { useNavigate } from "react-router-dom";
import { fetchSimilarGenres } from "../../fetch/fetchGenres";
import { SimilarFilms } from "../SimilarFilms/SimilarFilms";

export const SelectedFilm = (props: ICard) => {
  const [img, setImg] = useState("");
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    if (props.kinopoiskId) {
      fetchTrailer(props.kinopoiskId).then((values) => {
        values.items.forEach((item: any) => {
          if (item.url.includes("https://www.youtube.com"))
            setTrailer(item.url);
        });
      });
    }
  }, [props.kinopoiskId]);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImg(pic);
  };
  const navigate = useNavigate();
  const navigateToFilm = (id: number) => {
    navigate(`/selected/${id}`);
  };

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
              <div className={style.tagline}>{props.slogan}</div>
              {props.posterUrl ? (
                <img
                  className={style.image}
                  src={props.posterUrl}
                  onError={handleError}
                />
              ) : (
                <img className={style.image} src={pic} onError={handleError} />
              )}
            </div>
            <div className={style.secondBlock}>
              <h1 className={style.filmTitle}>{props.nameRu}</h1>
              <div className={style.releaseDate}>
                Release date: {props.year}
              </div>
              <div className={style.runtime}>
                Runtime: {props.filmLength} min.
              </div>

              <div className={style.revenue}>{props.shortDescription}</div>
              <div className={style.genres}>
                Genres: {props.genres.map((item) => item.genre).join(", ")}
              </div>

              <div className={style.rateBubble}>
                <div className={style.ratePlace}>
                  <div className={style.rate}>{props.ratingImdb}</div>
                </div>
                <div>
                  <div className={style.voteCount}>
                    People voited: {props.ratingVoteCount}
                  </div>
                  <div className={style.budget}>Budget: 3608900 $</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.videoFlex}>
            {trailer ? (
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=8Dk0d8hz9ag`}
              />
            ) : (
              <ReactPlayer url={`${trailer}`} />
            )}
          </div>
          <SimilarFilms
            filmId={props.filmId}
            key={props.filmId}
            nameEn={props.nameEn}
            nameRu={props.nameRu}
            ratingImdb={props.ratingImdb}
            ratingVoteCount={props.ratingVoteCount}
            year={props.year}
            posterUrl={props.posterUrl}
            filmLength={props.filmLength}
            genres={props.genres}
            liked={props.liked}
            onClickFilm={navigateToFilm}
          />
        </div>
      </div>
    </>
  );
};
