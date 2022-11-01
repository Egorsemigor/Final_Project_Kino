import style from "./style.module.css";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.mainDiv}>
          <h1 className={style.title}>CinemaRoom</h1>
          <div className={style.buttonContainer}>
            <a href="#">
              <div className={style.badget}>
                <div className={style.svgApple}></div>
                <div className={style.textButton}>App Store</div>
              </div>
            </a>

            <a href="#">
              <div className={style.badget}>
                <div className={style.svgGoogle}></div>
                <div className={style.textButton}>Google Play</div>
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
          <p className={style.axure}>
            &#169; 2022 © CinemaRoom. <br />
            220030 Республика Беларусь г. Минск, ул. Неманская, д.46 кв.81.
            <br /> Все права защищены.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
