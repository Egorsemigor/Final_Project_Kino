import style from "./style.module.css";
import { useSelector } from "react-redux";
import { TState } from "../../../store/store";
export const Footer = () => {
  const mode = useSelector((state: TState) => state.modeReducer.mode);

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.mainDiv}>
          <h1 className={mode ? style.title : style.dayTitle}>MovieHouse</h1>
          <div className={style.buttonContainer}>
            <a style={{ textDecoration: "none" }} href="#">
              <div className={mode ? style.badget : style.dayBadget}>
                <div className={style.svgApple}></div>
                <div className={mode ? style.textButton : style.dayTextButton}>
                  App Store
                </div>
              </div>
            </a>

            <a style={{ textDecoration: "none" }} href="#">
              <div className={mode ? style.badget : style.dayBadget}>
                <div className={style.svgGoogle}></div>
                <div className={mode ? style.textButton : style.dayTextButton}>
                  Google Play
                </div>
              </div>
            </a>
          </div>
          <div className={style.wrapper}>
            <div className={style.icon}>
              <a href="#" className={style.icons}>
                <i className={`${style.ico} ${style.icoFacebook}`}></i>
              </a>
              <a href="#" className={style.icons}>
                <i className={`${style.ico} ${style.icoTwitter}`}></i>
              </a>
              <a href="#" className={style.icons}>
                <i className={`${style.ico} ${style.icoPinterest}`}></i>
              </a>
              <a href="#" className={style.icons}>
                <i className={`${style.ico} ${style.icoInstagram}`}></i>
              </a>
              <a href="#">
                <i className={`${style.ico} ${style.icoGithub}`}></i>
              </a>
            </div>
          </div>
          <div className={style.axure}>
            &#169; 2022 © MovieHouse. <br />
            220030 Республика Беларусь г. Минск, ул. Неманская, д.46 кв.81.
            <br /> Все права защищены.{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};
