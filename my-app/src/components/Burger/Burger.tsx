import { NavLink } from "react-router-dom";
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
        {genresArr.map((genre: string) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.menuItem
            }
            to={`/genres/${genre.toLowerCase()}`}
          >
            {" "}
            {genre}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
