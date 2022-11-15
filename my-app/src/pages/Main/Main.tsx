import { AllFilms } from "../../components/AllFilms/AllFilms";
import { Footer } from "../../components/Layouts/Footer/Footer";
import { Header } from "../../components/Layouts/Header/Header";
import ReactPlayer from "react-player";
import { Tab } from "../../components/Tabs/Tabs";
import { Carusel } from "../../components/UI/Caurusel/Caurusel";

export const Main = () => {
  return (
    <>
      <Header />
      <Carusel />

      <Tab />
      <Footer />
    </>
  );
};
