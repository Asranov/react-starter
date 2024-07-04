import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("labels.greeting")}</h1>
    </>
  );
};

export default Home;
