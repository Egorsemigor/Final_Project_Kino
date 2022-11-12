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
import { Burger } from "../../Burger/Burger";
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
  const handleOnChange = () => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  localStorage.setItem("mode", String(mode));

  const logOut = () => {
    setUser(null);
    navigate("/main");
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
  };
  console.log(user);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.mainDiv}>
          <div className={style.burgerIcon}>
            <Burger />
            <div>
              <DarkModeToggle inputChecked={mode} onChange={handleOnChange} />
            </div>
          </div>

          <Link style={{ textDecoration: "none" }} to={"/main"}>
            <div className={mode ? style.logo : style.dayLogo}>MovieHouse</div>
          </Link>
          {/* <InputSearch
            value={search}
            placeholder={"Search for film..."}
            onChange={handleInput}
          /> */}

          {user ? (
            <div className={style.buttonContainer}>
              <div className={mode ? style.user : style.dayUser}>
                {user.username}
              </div>

              <Button type={"adaptive"} text={"Log Out"} onClick={logOut} />
            </div>
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
