import React from "react";
import igstudio from "../../Assests/Igstudio.png";
import vector from "../../Assests/Vector.png";
import styles from "./Header.module.css";
import logos from "../../Assests/logos.png";

const Header = ({ footer }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={vector} alt="vector" />
        <img src={igstudio} alt="igstudio" />
      </div>
      <div className={styles.navTextContainer}>
        <h3 className={styles.navText}>Home</h3>
        <h3 className={styles.navText}>Attorneys</h3>
        <h3 className={styles.navText}>Practice Areas</h3>
        <h3 className={styles.navText}>About Us</h3>
      </div>
      {footer ? (
        <img src={logos} alt="logos" className={styles.Img} />
      ) : (
        <button className={styles.btn}>Contact Now</button>
      )}
    </div>
  );
};

export default Header;
