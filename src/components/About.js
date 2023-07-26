import React, { useState } from "react";
import styles from "../styles.module.css";
import profile from "../images/profilepic.jpg";
import CustomModal from "./CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  const [modalOpen, setModalOpen] = useState(false); // Move the state to the top level
  const openModal = () => setModalOpen(true); // Move the function to the top level
  const closeModal = () => setModalOpen(false); // Move the function to the top level
  return (
    <div id="about">
      <CustomModal isOpen={modalOpen} onClose={closeModal}>
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name: Audis Mercado</label>
          <hr />
          <br />
          <label htmlFor="phone">Phone Number: 484-456-0802</label>
          <hr />
          <br />
          <label htmlFor="email">Primary Email: audis.mercado@gmail.com</label>
          <hr />
          <br />
          <label htmlFor="secondEmail">
            Secondary Email: audisg.mercado@gmail.com
          </label>
        </form>
      </CustomModal>
      <section className={styles.separator}>
        <h1>My Journey . . . </h1>
        <hr></hr>
      </section>
      <div className={`${styles.container} ${styles.transitioneffect}`}>
        <section className={styles.aboutsection1}>
          <img src={profile} alt="profilepic" />

          <div className={styles.iconWrapper}>
            <a
              className={`${styles.button} ${styles.icon}`}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/audis-mercado/"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
            <a
              className={`${styles.button} ${styles.icon}`}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/audiimer"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </section>
        <section className={styles.aboutsection2}>
          <h1>console.log("Hello, World!");</h1>

          <p>
            Hi, I'm Audis Mercado, a passionate learner with a diverse
            background in technology and business. I hold a{" "}
            <strong>
              Bachelor's degree in Business Administration with a focus on Human
              Resource Management
            </strong>
            , an{" "}
            <strong>Associate of Applied Sciences in Computer Science</strong>,
            and I'm currently pursuing a{" "}
            <strong>Master of Science in Computer Science</strong>. To
            complement my formal education, I have completed the{" "}
            <strong>Google IT Support Professional Certificate</strong> and
            acquired certifications in{" "}
            <strong>Python, HTML/CSS, and JavaScript</strong>.
          </p>

          <p>
            Initially, I intended to enroll in a coding bootcamp. However, after
            extensive reading and research, I discovered that App Academy offers
            their syllabus for free. Therefore, I decided to take on the
            bootcamp independently, aiming to enhance my skills and knowledge in
            various areas such as{" "}
            <strong>
              Test Driven Development, Data Structures and Algorithms, React,
              Structured Query Language (SQL)
            </strong>
            , and more.
          </p>
          <p>
            What sets App Academy apart is their comprehensive curriculum that
            not only covers advanced topics but also focuses on essential coding
            principles. They emphasize the{" "}
            <strong>
              importance of writing clean code, debugging techniques, testing
              strategies, and understanding JavaScript errors
            </strong>
            . I'm excited about the hands-on experience offered through{" "}
            <strong>capstone projects</strong>, which will allow me to apply my
            learning in real-world scenarios.
          </p>

          <p>
            I believe that with my academic background, certifications, and
            dedication to learning, I can bring value to your company's
            requirements. My ultimate goal is to become a{" "}
            <strong>skilled Full-Stack Software Engineer</strong> and make
            meaningful contributions to a professional team like yours.
          </p>

          <div className={styles.btnContainer}>
            <a
              className={`${styles.button} ${styles.btn}`}
              target="_blank"
              rel="noreferrer"
              href={require("../amercadoresume.pdf")}
            >
              View Resume
            </a>
            <a className={`${styles.button} ${styles.btn}`} onClick={openModal}>
              Contact Me
            </a>
          </div>
        </section>
      </div>
      <section className={styles.separator}>
        <hr></hr>
      </section>
    </div>
  );
}

export default About;
