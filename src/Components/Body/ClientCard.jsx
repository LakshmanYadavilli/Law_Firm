import React from "react";
import styles from "./ClientCard.module.css";

const ClientCard = ({ image, name, opacity }) => {
  return opacity ? (
    <div className={styles.card} style={{ opacity: "40%" }}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>CEO of Hunt</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  ) : (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>CEO of Hunt</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default ClientCard;
