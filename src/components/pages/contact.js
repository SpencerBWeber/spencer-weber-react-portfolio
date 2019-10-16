import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeholderContactPicture from "../../../static/assets/images/auth/login.jpg";

const Contact = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + placeholderContactPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">385-241-0857</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">spencerweber019@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Provo, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
