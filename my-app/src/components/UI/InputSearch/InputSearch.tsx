import { ChangeEventHandler, useState } from "react";
import style from "./style.module.css";

export const InputSearch = () => {
  const [search, setSearch] = useState("");
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };
  return (
    <input
      placeholder={"Search for film..."}
      onChange={handleSearch}
      value={search}
      className={style.search}
    ></input>
  );
};
