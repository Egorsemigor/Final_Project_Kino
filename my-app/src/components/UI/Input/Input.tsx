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
export const Input = (props: Input) => {
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );
  return (
    <div className={style.mainInput}>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={`${mode ? style.search : style.daySearch} ${
          props.error ? style.error : ""
        }`}
      ></input>
      <p className={style.text}>{props.error}</p>
    </div>
  );
};
