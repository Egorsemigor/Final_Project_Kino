import { ChangeEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
interface Input {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  title?: string;
}
export const InputSearch = (props: Input) => {
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      className={mode ? style.search : style.daySearch}
    ></input>
  );
};
