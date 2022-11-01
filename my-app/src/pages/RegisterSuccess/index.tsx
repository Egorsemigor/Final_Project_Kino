import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Layouts/Header/Header";
import { InfoTemplate } from "../../components/InfoTemplate";
import { Footer } from "../../components/Layouts/Footer/Footer";

export const RegisterSuccess = () => {
  const text = "";
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <InfoTemplate
        title={`Registration Confirmation`}
        textButton={"Home"}
        body={`
            Please activate your account with 
            test@gmail.com
            the activation link in the email
            test@gmail.com
            Please, check your email`}
        onClick={() => {
          navigate("/login");
        }}
      />
      <Footer />
    </>
  );
};
