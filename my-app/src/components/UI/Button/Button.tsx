import style from "./style.module.css";
// interface IButton {
//   text: string;
//   onClick: () => void;
// }
import { MouseEventHandler, useContext } from "react";
import { Context } from "../../../App";
import { useSelector } from "react-redux";

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
    return mode ? style.bigButton : style.dayBigButton ;
  } else {
    return mode ? style.button : style.dayButton;
  }
};

export const Button = ({ text, type, onClick }: IButton) => {
  const mode = useSelector(
    (state: { mode: { mode: boolean } }) => state.mode.mode
  );

  return (
    <button className={getButtonStyle(type, mode)} onClick={onClick}>
      {text}
    </button>
  );
};
