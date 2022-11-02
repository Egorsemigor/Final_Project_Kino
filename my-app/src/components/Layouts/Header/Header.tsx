import { access } from "fs";
import {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../App";
import { searchFilms } from "../../../fetch/searchFilms";
import { Button } from "../../UI/Button/Button";
import { DarkModeToggle } from "../../UI/DarkModeToggle";
import { InputSearch } from "../../UI/InputSearch/InputSearch";
import style from "./style.module.css";
export const Header = () => {
  const navigate = useNavigate();
  // const [search, setSearch] = useState("");
  const { user, setUser } = useContext(Context);
  // const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setSearch(event.target.value);
  // };
  // useEffect(() => {
  //   searchFilms(search).then((values) => {});
  // }, [search]);
  const dispatch = useDispatch();
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );

  // const [isDark, setIsDark] = useState(false);
  const handleOnChange = () => {
    // if (isDark) {
    //   setIsDark(false);
    // } else {
    //   setIsDark(true);
    // }

    dispatch({ type: "ADD_MODE", payload: mode });
  };
  const logOut = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.mainDiv}>
          <div className={style.burgerIcon}>
            <button className={style.clearButton}>
              <span className={style.burger}></span>
            </button>
            <div>
              <DarkModeToggle inputChecked={mode} onChange={handleOnChange} />
            </div>
          </div>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <div className={style.logo}>CinemaRoom</div>
          </Link>
          {/* <InputSearch
            value={search}
            placeholder={"Search for film..."}
            onChange={handleInput}
          /> */}

          {user ? (
            <Button type={"adaptive"} text={"Log Out"} onClick={logOut} />
          ) : (
            <div className={style.buttonContainer}>
              <Button
                type={"adaptive"}
                text={"Sign In"}
                onClick={() => {
                  navigate("/login");
                }}
              />
              <Button
                type={"adaptive"}
                text={"Sign Up"}
                onClick={() => {
                  navigate("/registration");
                }}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
