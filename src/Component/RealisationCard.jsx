import React from "react";
import "./Component.css";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function RealisationCard(props) {
  return (
    <div className="realisation_card">
      <div className="relative">
        <div style={{ height: 300 }}>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <a href={props.realisation}>
              <img
                style={{ borderRadius: 10, height: 300, marginBottom: 20 }}
                src={props.realisation}
                alt=""
                className="w-full h-full object-center object-cover "
              />
            </a>
          </LightGallery>
        </div>

        <div className="w-full absolute top-0 lg:px-32 px-3">
          <h2 className="w-full py-3 bg-red-500 text-white rounded-bl-md rounded-br-md text-center lg:text-base md:text-sm text-xs px-2">
            {props.description}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default RealisationCard;
