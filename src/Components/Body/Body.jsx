import React from "react";
import styles from "./Body.module.css";
import BodyCard from "./BodyCard";
import arrow from "../../Assests/arrow.png";
import copyRight from "../../Assests/copyRights.png";

import ClientCard from "./ClientCard";
import client1 from "../../Assests/client1.png";
import client2 from "../../Assests/client2.png";
import client3 from "../../Assests/client3.png";
import person1 from "../../Assests/person1.png";
import person2 from "../../Assests/person2.png";
import person3 from "../../Assests/person3.png";
import person4 from "../../Assests/person4.png";
import person5 from "../../Assests/person5.png";
import person6 from "../../Assests/person6.png";
import Header from "../Header/Header";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.introduce}>
        <div className={styles.introduce1}>
          <h1 className={styles.introduceText}>
            Let’s Introduce
            <br /> Ourself
          </h1>
        </div>
        <div className={styles.introduce2}>
          <h1>Criminal Layer</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div className={styles.chooseContainer}>
        <h1>Why Choosen Us?</h1>

        <div className={styles.card}>
          <BodyCard percentage="98%" />
          <BodyCard percentage="100%" middle={true} />
          <BodyCard percentage="100%" />
        </div>
      </div>
      <div className={styles.area}>
        <h1>Area of Practices</h1>

        <div className={styles.gridContainer}>
          <div className={`${styles.item1} ${styles.item}`}> Business Law</div>
          <div className={`${styles.item2} ${styles.item}`}>
            Partnership Law
          </div>
          <div className={`${styles.item3} ${styles.item}`}>
            Real Estate Law
          </div>
          <div className={`${styles.item4} ${styles.item}`}>Business Law</div>
          <div className={`${styles.item5} ${styles.item}`}>
            Landlord Disputes{" "}
          </div>
          <div className={`${styles.item6} ${styles.item}`}>Elder Abuse</div>
        </div>
      </div>
      <div className={styles.happy}>
        <div className={styles.happyHeader}>
          <h1>
            What Says Our <br /> Happy Clients
          </h1>
          <img src={arrow} alt="arrow" />
        </div>
        <div className={styles.clients}>
          <ClientCard image={client1} name="Jane Cooper" />
          <ClientCard
            image={client2}
            name="Devon Lane"
            opacity={true}
            style={{ opacity: 0.5 }}
          />
          <ClientCard image={client3} name="Robert Box" />
        </div>
      </div>
      <div className={styles.teamContainer}>
        <h1>Our Team</h1>
        <div className={styles.team}>
          <img src={person1} alt="p1" />
          <img
            src={person2}
            alt="p2"
            style={{
              backgroundColor: "#E3B748",

              borderRadius: "10px",
            }}
          />
          <img src={person3} alt="p3" />
          <img src={person4} alt="p4" />
          <img src={person5} alt="p5" />
          <img src={person6} alt="p6" />
        </div>
      </div>
      <div className={styles.FaqContainer}>
        <h1>FAQ</h1>
        <div>
          <p width="50%" className={styles.FaqText}>
            Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
            do amet sint.
          </p>
          <div
            className="accordion accordion-flush acc"
            id="accordionFlushExample"
            style={{ backgroundColor: "#121212", width: "50%" }}
          >
            <div
              className="accordion-item"
              width="100%"
              style={{ backgroundColor: "#121212", color: "#ffffff" }}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    backgroundColor: "#121212",
                    color: "#ffffff",
                    height: "60px",
                  }}
                >
                  Do I need a personal injury report?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              width="100%"
              style={{ backgroundColor: "#121212", color: "#ffffff" }}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{
                    backgroundColor: "#121212",
                    color: "#ffffff",
                    height: "60px",
                  }}
                >
                  What should I do right after car accidect
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              width="100%"
              style={{ backgroundColor: "#121212", color: "#ffffff" }}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{
                    backgroundColor: "#121212",
                    color: "#ffffff",
                    height: "60px",
                  }}
                >
                  How much is my case worth?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <h1>Subscribe Our News Letter</h1>
        <div className={styles.form}>
          <input type="text" placeholder="Enter your Name:" />
          <input type="text" placeholder="Enter your Email:" />
          <button style={{ backgroundColor: "#E3B748" }}>SEND</button>
        </div>
      </div>
      <Header footer={true} />
      <center>
        <img src={copyRight} alt="copyRight" />
      </center>
    </div>
  );
};

export default Body;
