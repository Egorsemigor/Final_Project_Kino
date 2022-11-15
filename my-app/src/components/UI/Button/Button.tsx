import style from "./style.module.css";

import { MouseEventHandler, useContext } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../../store/store";

type ButtonColorType = "adaptive" | "dontAdaptive";

interface IButton {
  text: string;
  type: ButtonColorType;
  className?: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const getButtonStyle = (type: ButtonColorType, mode: boolean) => {
  if (type === "dontAdaptive") {
    return mode ? style.bigButton : style.dayBigButton;
  } else {
    return mode ? style.button : style.dayButton;
  }
};

export const Button = ({ text, type, onClick }: IButton) => {
  const mode = useSelector((state: TState) => state.modeReducer.mode);

  return (
    <button className={getButtonStyle(type, mode)} onClick={onClick}>
      {text}
    </button>
  );
};
