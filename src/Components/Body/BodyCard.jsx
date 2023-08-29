import React from "react";
import giftImg from "../../Assests/Group 19.png";
import styles from "./BodyCard.module.css";

const BodyCard = ({ percentage, middle }) => {
  return middle === undefined ? (
    <div className={styles.card}>
      <img width="101px" height="101px" src={giftImg} alt="giftTmg" />
      <h3 className={styles.main}>{percentage} Success Rate</h3>
      <p className={styles.sub}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.btn}>Read more</button>
    </div>
  ) : (
    <div className={styles.card} style={{ opacity: "30%" }}>
      <img width="101px" height="101px" src={giftImg} alt="giftTmg" />
      <h3 className={styles.main}>{percentage} Success Rate</h3>
      <p className={styles.sub}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.btn}>Read more</button>
    </div>
  );
};

export default BodyCard;
