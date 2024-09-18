import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div
      className={`${styles.footer} d-flex flex-row justify-content-center align-items-center p-20`}
    >
      All rights reserved © AB <span className="ml-10"></span>
    </div>
  );
};

export default Footer;
