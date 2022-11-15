import style from "./style.module.css";

type Tabs = "primary" | "secondary";

interface IButtonTab {
  text: string;
  onClick: () => void;
  type: Tabs;
}

export const TabButton = (props: IButtonTab) => {
  const btnStyles = (type: Tabs) => {
    if (type === "primary") {
      return style.primary;
    }
    if (type === "secondary") {
      return style.secondary;
    }
  };

  return (
    <button onClick={props.onClick} className={btnStyles(props.type)}>
      {props.text}
    </button>
  );
};
