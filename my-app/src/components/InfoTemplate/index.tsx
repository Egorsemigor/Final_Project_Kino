import { useContext } from "react";
import { Context } from "../../App";
import { Button } from "../UI/Button/Button";
import style from "./style.module.css";
interface ITemplate {
  title: string;
  body: string;
  textButton: string;
  onClick: () => void;
}
export const InfoTemplate = ({
  title,
  body,
  textButton,
  onClick,
}: ITemplate) => {
  const values = useContext(Context);
  return (
    <div className={style.infoMain}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.darkBody}>{body}</p>
      <Button type={"dontAdaptive"} text={textButton} onClick={onClick} />
    </div>
  );
};
