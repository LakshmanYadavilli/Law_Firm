import React from "react";
import styles from "./HeroSection.module.css";
// import MailIcon from "@mui/icons-material/Mail";
import { MdEmail } from "react-icons/md";
import image from "../../Assests/Image.png";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div>
        <h1 className={styles.mainText}>You don’t have to Fight them Alone.</h1>
        <p className={styles.subText}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.{" "}
        </p>

        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <MdEmail />
            <input placeholder={`Enter your Email addresss`} />
          </div>
          <div className={styles.btnContainer}>
            <button>Let's Talk</button>
          </div>
        </div>
      </div>
      <img src={image} alt="profile" />
    </div>
  );
};

export default HeroSection;
