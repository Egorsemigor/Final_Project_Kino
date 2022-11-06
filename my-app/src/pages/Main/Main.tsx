import { AllFilms } from "../../components/AllFilms/AllFilms";
import { Footer } from "../../components/Layouts/Footer/Footer";
import { Header } from "../../components/Layouts/Header/Header";
import ReactPlayer from "react-player";

export const Main = () => {
  return (
    <>
      <Header />
      <AllFilms />
      <Footer />
    </>
  );
};
