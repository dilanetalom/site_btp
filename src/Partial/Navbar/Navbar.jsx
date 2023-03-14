import React, { useState, useEffect } from "react";
import ButtonComponent from "../../Component/ButtonComponent";
import logo from "../../assets/images/logo.png";
import hamburger from "../../assets/images/open.png";
import close from "../../assets/images/Close.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState(true);

  const handleOpen = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.addEventListener("resize", showButton);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="w-full fixed lg:relative  header" style={{ zIndex: 9999 }}>
      <div className="w-full  lg:py-3 py-2 lg:px-32 px-10 flex items-center navbar absolute bg-black ">
        <div className=" w-full lg:mx-auto flex items-center lg:space-x-20">
          {/* logo Section - left */}
          <div className="w-1/6  h-full  flex items-center">
            <div className="mx-auto bg-white p-1 rounded-t-full">
              <img
                src={logo}
                onClick={closeMobileMenu}
                alt=""
                className="lg:w-28 md:h-24 md:w-24 w-24 h-10 "
              />
            </div>
          </div>

          <div className="lg:w-4/ w- h-ful fle items-center lg:visibl navbar-container">
            {/* Middle element - right */}
            <ul className={open ? "navbar_custom active" : "navbar_custom"}>
              <li className="">
                <Link to="/" className="a focus:text-red-500">
                  {" "}
                  {t("acceuil")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="a focus:text-red-500">
                  {t("qui_somme")}
                </Link>
              </li>
              <li>
                <Link to="/service" className="a focus:text-red-500">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link to="/realisation" className="a focus:text-red-500">
                  {t("realisation")}
                </Link>
              </li>
              {open ? (
                <li>
                  <Link to="/contact" className="a focus:text-red-500">
                    {t("contact_us")}
                  </Link>
                </li>
              ) : null}
            </ul>

            {/* Contact Bsutton */}
            <div className="w-1/6 contact_button ">
              <Link to="/contact">
                <ButtonComponent class="white" text={t("contact_us")} />
              </Link>
            </div>
          </div>
          <div className="absolute right-10 visible lg:invisible w-8 h-8">
            <>
              <input
                type="checkbox"
                id="hamburgerEffect"
                onClick={handleOpen}
              ></input>
              <label id="burger" for="hamburgerEffect">
                <div></div>
                <div></div>
                <div></div>
              </label>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
