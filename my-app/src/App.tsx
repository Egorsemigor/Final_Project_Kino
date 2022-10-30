import React, { useEffect, useState } from "react";
import "./App.css";
import { AllFilms } from "./components/AllFilms/AllFilms";
import { FilmCard } from "./components/FilmCard/FilmCard";
import { FilmList } from "./components/FilmList/FilmList";
import { Footer } from "./components/Layouts/Footer/Footer";
import { Header } from "./components/Layouts/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <AllFilms />
      <Footer />
    </div>
  );
}

export default App;
