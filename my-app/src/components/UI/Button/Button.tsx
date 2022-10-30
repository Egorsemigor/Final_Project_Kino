import style from './style.module.css'
interface IButton {
  text: string;
  onClick: () => void;
}
export const Button = ({text,onClick}:IButton) => {
  return <button className={style.button}  onClick={onClick}>{text}</button>;
};
