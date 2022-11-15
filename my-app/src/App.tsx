import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import { IUser } from "./Types/auth";
import { getUser } from "./fetch/getUser";
import { useSelector } from "react-redux";
import loader from "./assets/img/loader.svg";
export const Context = createContext<{
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  user: null,
  setUser: (value: IUser | null) => {},
});
const access = localStorage.getItem("access");
export function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);
  useEffect(() => {
    if (access) {
      let isOk = true;
      getUser()
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((user) => {
          if (isOk) {
            setUser(user);
          }
        })
        .finally(() => {
          setIsReady(true);
        });
    }
  }, []);
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );
  return (
    <>
      {isReady ? (
        <div className={mode ? "App" : "dayApp"}>
          <BrowserRouter>
            <Context.Provider
              value={{
                user: user,
                setUser: setUser,
              }}
            >
              <RootRouter />
            </Context.Provider>
          </BrowserRouter>
        </div>
      ) : (
        <div className={"loader"}>
          <img src={loader} alt="" />
        </div>
      )}
    </>
  );
}
