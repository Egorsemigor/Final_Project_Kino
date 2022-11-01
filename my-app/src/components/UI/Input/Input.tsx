import { ChangeEventHandler, useState } from "react";
import style from "./style.module.css";
interface Input {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  title?: string;
}
export const Input = (props: Input) => {
  return (
    <div className={style.mainInput}>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={`${style.search} ${props.error ? style.error : ""}`}
      ></input>
      <p className={style.text}>{props.error}</p>
    </div>
  );
};
