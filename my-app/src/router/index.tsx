import { Route, Routes } from "react-router-dom";
import { Landing } from "../components/Landing/landing";
import { EmailConfirm } from "../pages/EmailConfirmed";
import { LoginPage } from "../pages/LoginPage/Login";
import { Main } from "../pages/Main/Main";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { SelectedPage } from "../pages/SelectedPage/SelectedPage";
import { SingleGenrePage } from "../pages/SingleGenrePage/SingleGenrePage";

export const RootRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/main" element={<Main />} />
    <Route path="/selected/:filmId" element={<SelectedPage />} />
    <Route path="/registration" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/activate/:uid/:token" element={<EmailConfirm />} />
    <Route path="/registrationsecsess" element={<RegisterSuccess />} />
    <Route path="/genres/:genre" element={<SingleGenrePage />} />
  </Routes>
);
