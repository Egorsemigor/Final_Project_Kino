import { useContext, useState } from "react";
import { Context } from "../../App";
import { AllFilms } from "../AllFilms/AllFilms";
import { LikedFilms } from "../LikedFilms/LikedFilms";
import { TabButton } from "../UI/TabButton/TabButton";

type Tabi = "all" | "liked";

export const getTabList = (tab: Tabi) => {
  if (tab === "all") {
    return <AllFilms />;
  }

  if (tab === "liked") {
    return <LikedFilms />;
  }

  return null;
};

export const Tab = () => {
  const { user } = useContext(Context);
  const [selectedTab, setSelectedTab] = useState<Tabi>("all");

  if (!user) {
    return <AllFilms />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "50px",
          paddingLeft: "20px",
        }}
      >
        <TabButton
          text={"All Films"}
          onClick={() => setSelectedTab("all")}
          type={selectedTab === "all" ? "primary" : "secondary"}
        />
        <TabButton
          text={"Favorite"}
          onClick={() => setSelectedTab("liked")}
          type={selectedTab === "liked" ? "primary" : "secondary"}
        />
      </div>
      {getTabList(selectedTab)}
    </>
  );
};
