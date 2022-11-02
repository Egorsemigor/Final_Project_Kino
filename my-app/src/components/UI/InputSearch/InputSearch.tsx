import { ChangeEventHandler, useState } from "react";
import style from "./style.module.css";
interface Input {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  title?: string;
}
export const InputSearch = (props: Input) => {
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      className={style.search}
    ></input>
  );
};
