import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../App";
import { TState } from "../../../store/store";
import { Burger } from "../../Burger/Burger";
import { Button } from "../../UI/Button/Button";
import { DarkModeToggle } from "../../UI/DarkModeToggle";
import style from "./style.module.css";
export const Header = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(Context);
  const dispatch = useDispatch();
  const mode = useSelector((state: TState) => state.modeReducer.mode);
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
