import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { RootRouter } from "./router";
import { AllFilms } from "./components/AllFilms/AllFilms";
import { SelectedFilm } from "./components/SelectedFilm/SelectedFilm";
import { IUser } from "./Types/auth";
import { getUser } from "./fetch/getUser";
export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
  userName1: string;
  setUserName: (value: any) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
  userName1: "",
  setUserName: (value: any) => {},
});
const access = localStorage.getItem("access");
export function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [userName1, setUserName] = useState("");
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
            setUserName(user.username);
          }
        })
        .finally(() => {
          setIsReady(true);
        });
    }
  }, []);
  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          isDark: isDark,
          setIsDark: setIsDark,
          user: user,
          setUser: setUser,
          userName1: userName1,
          setUserName: setUserName,
        }}
      >
        <RootRouter />
      </Context.Provider>
    </BrowserRouter>
  );
}
