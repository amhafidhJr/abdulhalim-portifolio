import * as React from "react";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mb-0">
          <div className="col-md-4 d-flex align-items-center mb-0">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use href="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; 2024 Abdulhalim Hafidh, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="!#">
                <svg className="bi" width="20" height="20">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="!#">
                <svg className="bi" width="20" height="20">
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="!#">
                <svg className="bi" width="20" height="20">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
