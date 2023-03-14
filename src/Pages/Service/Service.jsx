import React from "react";
import ServiceCard from "../../Component/ServiceCard";
import "./Service.css";
import master1 from "../../assets/images/master1.jpg";
import master7 from "../../assets/images/master7.jpg";
import master8 from "../../assets/images/master8.jpg";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      path: "/grosoeuvre",
      titre: t("titre1"),
      servicetitle: t("servicetitle2"),
      dure: 500,
      serviceimage: master1,
    },
    {
      id: 2,
      path: "/conception",
      titre: t("titre2"),
      servicetitle: t("servicetitle2"),
      dure: 1000,
      serviceimage: master7,
    },
    {
      id: 3,
      path: "/dimension",
      titre: t("titre3"),
      servicetitle: t("servicetitle3"),
      dure: 1500,
      serviceimage: master8,
    },
  ];
  return (
    <div className="w-full pt-10 pb-10 lg:px-32 px-10 space-y-16 bg-gray-100 custom_services">
      <div className="flex">
        <div className="w-full  pr-10 space-y-2">
          <p className="text-gray-300 text-xs">{t("savoir")}</p>
          <h1 className="text-4xl">{t("services")}</h1>
          <p className="text-base">{t("titre_service")}</p>
        </div>
      </div>
      <div className=" relative w-full md:space-x-8 md:flex space-y-5 md:space-y-0">
        {services && services.length > 0 ? (
          services.map((item, key) => (
            <ServiceCard
              path={item.path}
              titre={item.titre}
              servicetitle={item.servicetitle}
              dure={item.dure}
              serviceimage={item.serviceimage}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Service;
