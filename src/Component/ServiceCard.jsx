import React from "react";
import "./Component.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ServiceCard(props) {
  const { t } = useTranslation();
  return (
    <div
      className="lg:h-80 h-52 md:w-1/3 w-full relative service_card bg-whit md:flex shadow-md"
      data-aos="fade-down"
      // data-aos-easing="linear"
      data-aos-duration={props.dure}
    >
      <img
        src={props.serviceimage}
        alt=""
        className="absolute  object-center object-cover"
      />
      <div className="w-full h-full flex bg-black opacity-75 hover:opacity-50 conttent items-center p-5 space-y-2 text-center absolute items-center ">
        <div className="mx-auto space-y-3 content">
          <div className=" service_text">
            <h1 className="lg:text-2xl md:text-sm text-white">{props.titre}</h1>
          </div>
          {/* <p className='  text-base ' > {props.servicetitle}</p> */}
          <div onClick={props.onclick} className="service_buton">
            <Link
              to={props.path}
              className="p-3 text-xs text-white hover:text-white font-semibold rounded-full lg:w-32 w-28 border hover:bg-red-500 hover:border-0 "
            >
              {t("lireplus")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
