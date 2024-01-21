import React from "react";
import Layout from "./router/Layout";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>App.tsx</h1>
      <h1>{t("labels.greeting")}</h1>
      <Layout />
    </>
  );
};

export default App;
