import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer-list">
                <a href="#"><li><FontAwesomeIcon icon={faTwitterSquare}/></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faFacebook}/></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faInstagramSquare}/></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faGithub}/></li></a>
            </ul>
        </div>
    );
}
