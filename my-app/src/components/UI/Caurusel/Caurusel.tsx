import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import style from "./style.module.css";
import { carouselData } from "./carouselData";
export const Carusel = () => {
  return (
    <div className={style.carousel}>
      <Carousel>
        {carouselData.map((item) => {
          return (
            <Carousel.Item>
              <div className={style.mainImg}>
                <img className={style.image} src={item.src} alt="Image One" />
              </div>

              <Carousel.Caption>
                <div className={style.mainText}>
                  <h3 className={style.title}>{item.title}</h3>
                  <p className={style.text}>{item.text}</p>
                  <a className={style.link} href={item.href}>
                    Watch it!
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
