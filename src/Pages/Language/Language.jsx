import React,{ useState} from "react";
import i18n from "../translations/i18n"
import './Language.css'

function Language() {
  const [language, setLanguage] = useState("fr");

  const handleOnChange = (val) => {
    setLanguage(val);
    i18n.changeLanguage(val);
  };

  return (
    <div>
      <a href="#menu__drop" id="deroule">
        {language === "fr" ? (
          <>
            <span id="menu__drop">
              <img
                src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_France.png"
                class="lang-flag"
                width={20}
                height={20}
                alt="images"
              ></img>
              <span className="langue">Français</span>
            </span>
          </>
        ) : (
          <>
            <span id="menu__drop">
              <img
                src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png"
                class="lang-flag"
                width={20}
                height={20}
                alt="images"
              ></img>
              <span className="langue">English</span>
            </span>
          </>
        )}

        <ul id="drop">
          <li>
            <span
              // value="fr"
              onClick={()=>handleOnChange("fr")}
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_France.png"
                class="lang-flag"
                width={20}
                height={20}
                alt="images"
              ></img>
              Français
            </span>
          </li>
          <li>
            <span
              // value="en"
              onClick={()=>handleOnChange("en")}
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png"
                class="lang-flag"
                width={20}
                height={20}
                alt="images"
              ></img>
              Anglais
            </span>
          </li>
        </ul>
      </a>
    </div>
  );
}

export default Language;
