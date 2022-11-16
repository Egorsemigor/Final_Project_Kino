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
  const [img, setImage] = useState("");
  const [imdbID, setImdbID] = useState("");
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    fetchImg(props.title).then((values) => {
      setImage(values.Poster);
      setImdbID(values.imdbID);
    });
  }, [props]);
  useEffect(() => {
    fetchTrailer(imdbID).then((values) => {
      if (values.linkEmbed !== null) {
        setTrailer(values.linkEmbed);
      }
    });
  }, [imdbID]);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(pic);
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
