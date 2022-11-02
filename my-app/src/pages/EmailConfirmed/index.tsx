import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../fetch/activateUser";

import { Header } from "../../components/Layouts/Header/Header";
import { InfoTemplate } from "../../components/InfoTemplate";
import { Footer } from "../../components/Layouts/Footer/Footer";

export const EmailConfirm = () => {
  const navigate = useNavigate();
  const params = useParams();
  if (params.uid && params.token) {
    activateUser(params.uid, params.token);
  }

  return (
    <>
      <Header />
      <InfoTemplate
        title={`Success`}
        textButton={"Login"}
        body={`
          Email confirmed.                
          Your registration is now completed`}
        onClick={() => {
          navigate("/login");
        }}
      />
      <Footer/>
    </>
  );
};
