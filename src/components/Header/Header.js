import React from "react";

import "./Header.css";
import profile from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <img className="profile" src={profile} />
      <div className="header-row1">
        <h1 className="header-name">Laura Smith</h1>
        <h4 className="header-title">Frontend Developer</h4>
        <ul className="header-list">
          <a href="#">
            <li className="header-mail">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </li>
          </a>
          <a href="#">
            <li className="header-linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>Linkedin</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
