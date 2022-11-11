import { Link } from "react-router-dom";
import { genresArr } from "./genresArr";
import style from "./style.module.css";

export const Burger = () => {
  return (
    <div className={style.burgerMenu}>
      <input id={style.menuToggle} type="checkbox" />
      <label className={style.menuBtn} htmlFor={style.menuToggle}>
        <span></span>
      </label>

      <ul className={style.menuBox}>
        {genresArr.map((genre: string) => {
          return (
            <Link className={style.menuItem} to={`/genres/:${genre}`}>
              {" "}
              {genre}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
