import style from "./style.module.css";
// interface IButton {
//   text: string;
//   onClick: () => void;
// }
import { MouseEventHandler, useContext } from "react";
import { Context } from "../../../App";

type ButtonColorType = "adaptive" | "dontAdaptive";

interface IButton {
  text: string;
  type: ButtonColorType;
  className?: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const getButtonStyle = (type: ButtonColorType, isDark: boolean) => {
  if (type === "dontAdaptive") {
    return style.bigButton;
  } else {
    return style.button;
  }
};

export const Button = ({ text, type, onClick }: IButton) => {
  const { isDark } = useContext(Context);
  // let style = "";
  // if (text === "Registration") {
  //   style = "bigButton";
  // } else if (text === "Login") {
  //   style = "bigButton";
  // } else if (text === "Load more films") {
  //   style = "bigButton";
  // } else {
  //   style = "button";
  // }

  // text === "Registration" || 'Login'  || 'Load More Films'  ? style.bigButton : style.button
  return (
    <button className={getButtonStyle(type, isDark)} onClick={onClick}>
      {text}
    </button>
  );
};
