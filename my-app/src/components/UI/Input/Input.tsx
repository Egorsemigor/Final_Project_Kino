import { ChangeEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../../store/store";
import style from "./style.module.css";
interface Input {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  type?: string;
  title?: string;
}
export const Input = (props: Input) => {
  const mode = useSelector((state: TState) => state.modeReducer.mode);
  const [password, setPassword] = useState(props.type);
  const handleType = () => {
    if (password === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };
  return (
    <div className={style.mainInput}>
      {props.type ? (
        <span
          onClick={handleType}
          className={password === "password" ? style.closedEye : style.eye}
        ></span>
      ) : null}
      <input
        type={password}
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
