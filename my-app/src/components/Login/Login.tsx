import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../UI/Button/Button";
import style from "./style.module.css";
// import { Link, Navigate, useNavigate } from "react-router-dom";
import { getUser } from "../../fetch/getUser";
import { login } from "../../fetch/login";
import { Context } from "../../App";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const values = useContext(Context);
  const { setUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let isOk = true;
    login(email, password)
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((json) => {
        if (isOk) {
          localStorage.setItem("access", json.access);
          localStorage.setItem("refresh", json.refresh);
          getUser()
            .then((responce) => {
              return responce.json();
            })
            .then((user) => {
              setUser(user);
              console.log(user);
              navigate("/main");
            });

          console.log(json);
        } else {
        }
      });
  };

  return (
    <div className={values.isDark ? style.darkContainer : style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.margin}>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Email
            </p>
            <Input value={email} placeholder={""} onChange={handlerEmail} />
          </div>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Password
            </p>
            <Input
              value={password}
              placeholder={""}
              onChange={handlerPassword}
            />
          </div>
        </div>
        <div className={style.buttonContainer}>
          <Button text={"Login"} type={"dontAdaptive"} onClick={() => {}} />
        </div>
      </form>
      <p className={style.text}>
        Forgot your password?{` `}
        <Link className={style.link} to={"/registration"}>
          Reset password
        </Link>
      </p>
    </div>
  );
};
