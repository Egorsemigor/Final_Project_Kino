import { ChangeEvent } from "react";
import { Button } from "../../UI/Button/Button";
import { DarkModeToggle } from "../../UI/DarkModeToggle";
import { InputSearch } from "../../UI/InputSearch/InputSearch";
import style from "./style.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.mainDiv}>
          <div className={style.burgerIcon}>
            <div className={style.svg}></div>
            <button className={style.clearButton}>
              <span className={style.burger}></span>
            </button>
          </div>
          <InputSearch />
          <div>
            <DarkModeToggle
              inputChecked={false}
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className={style.buttonContainer}>
            <Button
              text={"Вход"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Button
              text={"Регистрация"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
