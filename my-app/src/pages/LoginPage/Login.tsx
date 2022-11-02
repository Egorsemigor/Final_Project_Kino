import { Footer } from "../../components/Layouts/Footer/Footer";
import { Header } from "../../components/Layouts/Header/Header";
import { Login } from "../../components/Login/Login";
import style from "./style.module.css";

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};
