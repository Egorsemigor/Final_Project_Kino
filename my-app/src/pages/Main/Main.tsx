import { AllFilms } from "../../components/AllFilms/AllFilms";
import { Footer } from "../../components/Layouts/Footer/Footer";
import { Header } from "../../components/Layouts/Header/Header";

export const Main = () => {
  return (
    <>
      <Header />
      <AllFilms />
      <Footer />
    </>
  );
};
