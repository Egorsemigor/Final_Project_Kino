import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import style from "./style.module.css";
// import { Context } from "../../App";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validate";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../fetch/registerUser";
import { Context } from "../../App";
import { useSelector } from "react-redux";
export const RegistrationForm = () => {
  const values = useContext(Context);
  const [userName, setUserName] = useState("");
  const [userError, setUserError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const handlerUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value);
    if (error) {
      setUserError(error);
    } else {
      setUserError("");
    }
    setUserName(event.target.value);
  };
  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
    }

    setEmail(event.target.value);
  };
  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError("");
    }
    setPassword(event.target.value);
  };
  const handlerComfirmPassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const error = validateConfirmPassword(password, event.target.value);
    if (error) {
      setConfirmPasswordError(error);
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPassword(event.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };
  const [error, setError] = useState("");

  const onClickLogin = () => {
    setError("");
    const errors = {
      username: validateRequired(userName),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };
    setUserError(errors.username);
    setEmailError(errors.email);
    setPassword(errors.password);
    setConfirmPassword(errors.confirmPassword);
    const isValidForm = Object.values(errors).every((error) => error === "");
    if (isValidForm) {
      const promise = registerUser(userName, email, password);
      let isOk = false;
      promise
        .then((response) => {
          response.ok ? (isOk = true) : (isOk = false);
          return response.json();
        })
        .then((json) => {
          if (isOk) {
            navigate("/registrationsecsess");
          } else {
            if (
              json?.username?.includes(
                " A user with that username already exists."
              )
            ) {
              setError("Пользователь с таким имененм существует!");
            }
            console.log(json);
            if (json?.email?.includes("user with this Email already exists.")) {
              setError("Пользователь с таким Email уже существует.");
            }
            if (
              json?.password?.includes(
                "This password is too short. It must contain at least 8 characters."
              )
            ) {
              setError(
                "Ваш пароль слишком короткий. Он долже содержать не менее 8 символов."
              );
            }
            if (json?.password?.includes("This password is too common.")) {
              setError("Слишком легкий пароль.");
            }
            if (
              json?.password?.includes("  This password is entirely numeric.")
            ) {
              setError("Этот пароль содержит только цифры");
            }

            console.log(json);
          }
        });
    }
  };
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.margin}>
          <div className={style.inputMargin}>
            <p className={mode ? style.InputTitle : style.dayInputTitle}>
              User name
            </p>
            <Input
              value={userName}
              placeholder={""}
              onChange={handlerUserName}
              error={userError}
            />
          </div>
          <div className={style.inputMargin}>
            <p className={mode ? style.InputTitle : style.dayInputTitle}>
              Email
            </p>
            <Input
              value={email}
              placeholder={""}
              onChange={handlerEmail}
              error={emailError}
            />
          </div>
          <div className={style.inputMargin}>
            <p className={mode ? style.InputTitle : style.dayInputTitle}>
              Password
            </p>
            <Input
              type="password"
              value={password}
              placeholder={""}
              onChange={handlerPassword}
              error={passwordError}
            />
          </div>
          <div className={style.inputMargin}>
            <p className={mode ? style.InputTitle : style.dayInputTitle}>
              Confirm Password
            </p>
            <Input
              type="password"
              value={confirmPassword}
              placeholder={""}
              onChange={handlerComfirmPassword}
              error={confirmPasswordError}
            />
          </div>
        </div>
        <p className={style.error}>{error}</p>
        <div className={style.buttonContainer}>
          <Button
            text={"Registration"}
            onClick={onClickLogin}
            type={"dontAdaptive"}
          />
        </div>
      </form>
      <p className={style.text}>
        If you have account, you can{" "}
        <Link className={style.link} to={"/login"}>
          login
        </Link>
      </p>
    </div>
  );
};
