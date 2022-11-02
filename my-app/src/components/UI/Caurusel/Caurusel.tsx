import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import style from "./style.module.css";
export const Carusel = () => {
  return (
    <div className={style.caurusel}>
      <Carousel>
        <Carousel.Item>
          <div className={style.mainImg}>
            <img
              className={style.image}
              src="https://wallscloud.net/img/resize/2560/1080/MM/2018-02-28-black-panther-film-man-cinema-movie-king-seifuku-uniform-her.jpg"
              alt="Image One"
            />
          </div>

          <Carousel.Caption>
            <div className={style.mainText}>
              <h3 className={style.title}>Black Panther</h3>
              <p className={style.text}>
                What is this movie about: King T'Challa returns home from
                America to the reclusive, technologically advanced African
                nation of Wakanda to serve as his country's new leader...
              </p>
              <a
                className={style.link}
                href="http://localhost:3001/selected/284054"
              >
                Watch it!
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.mainImg}>
            <img
              className={style.image}
              src="https://a-static.besthdwallpaper.com/miguel-with-his-great-grandfather-hector-wallpaper-2560x1080-13985_14.jpg"
              alt="Image One"
            />
          </div>

          <Carousel.Caption>
            <div className={style.mainText}>
              <h3 className={style.title}>Coco</h3>
              <p className={style.text}>
                What is this movie about: Despite his family’s baffling
                generations-old ban on music, Miguel dreams of becoming an
                accomplished musician like his idol, Ernesto de la Cruz.
                Desperate to prove his talent...
              </p>
              <a
                className={style.link}
                href="http://localhost:3001/selected/354912"
              >
                Watch it!
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.mainImg}>
            <img
              className={style.image}
              src="https://m.media-amazon.com/images/M/MV5BOTQxMTI0MjczNl5BMl5BanBnXkFtZTgwMTI0MjQxNTM@._V1_.jpg"
              alt="Image One"
            />
          </div>

          <Carousel.Caption>
            <div className={style.mainText}>
              <h3 className={style.title}>Ready Player One</h3>
              <p className={style.text}>
                What is this movie about: When the creator of a popular video
                game system dies, a virtual contest is created to compete for
                his fortune.
              </p>
              <a
                className={style.link}
                href="http://localhost:3001/selected/333339"
              >
                Watch it!
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
