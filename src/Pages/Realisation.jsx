import React from "react";
import Localisation from "../Component/Localisation";
import SmallSection from "../Component/SmallSection";
import Footer from "../Partial/Footer/Footer";
import Contact from "./Contact/Contact";
import { useTranslation } from "react-i18next";
import master1 from "../assets/images/master1.jpg";
import master7 from "../assets/images/master7.jpg";
import master8 from "../assets/images/master8.jpg";
import master4 from "../assets/images/master4.jpg";
import master10 from "../assets/images/master10.jpg";
import master3 from "../assets/images/master3.jpg";
import RealisationCard from "../Component/RealisationCard";

function Realisation() {
  const { t } = useTranslation();
  return (
    <div>
      <SmallSection title={t("realisation")} />
      <h1 className="text-center mt-20 text-xl font-semibold">
        {t("quelque")}
      </h1>
      <p className="lg:px-32 px-10 mt-5 lg:w-2/3">
        {" "}
        <b>MASTER ENTREPRISE</b> {t("quelque_description")}{" "}
      </p>
      <div
        className="mt-10 mb-10"
        style={{
          width: "100%",
          paddingLeft: 120,
          paddingRight: 120,
        }}
      >
        <RealisationCard realisation={master1} description={t("real1")} />
        <RealisationCard realisation={master7} description={t("real2")} />
        <RealisationCard realisation={master8} description={t("real3")} />
        <RealisationCard realisation={master4} description={t("real4")} />
        <RealisationCard realisation={master10} description={t("real5")} />
        <RealisationCard realisation={master3} description={t("real6")} />
      </div>

      <Contact />
      <Localisation />
      <Footer />
    </div>
  );
}

export default Realisation;
