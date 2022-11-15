import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.flex}>
          <h1>Welcome to</h1>
          <div className={style.title}>MovieHouse</div>
          <p className={style.text}>Dive in the real cinema theater.</p>

          <button
            onClick={() => {
              navigate("/main");
            }}
            className={style.link}
          >
            Start watching
          </button>
        </div>
      </div>
    </div>
  );
};
