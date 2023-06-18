import React, { useState } from "react";
import styles from "../styles.module.css";
import profile from "../images/profilepic.jpg";
import CustomModal from "./CustomModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

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
<section className={styles.test}>
        <h1>My Journey .  .  .  </h1>
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
            My name is Audis Mercado. I hold a{" "}
            <strong>
              Bachelor in Business Administration / Human Resource Management,
              an Associate of Applied Sciences in Computer Science
            </strong>
            , and have completed an IT bootcamp where I obtained the Google IT
            Support Professional Certificate. Subsequently, I made the decision
            to focus on becoming a self-taught programmer. I started by
            purchasing courses on platforms like Udemy and Coursera, through
            which I acquired certifications in programming languages such as
            Python and HTML/CSS & JavaScript since I had already learned Java
            and C# during my time in college.
          </p>

          <p>
            Initially, I intended to enroll in a coding bootcamp. However, after
            extensive reading and research, I discovered that App Academy offers
            their syllabus for free. Therefore, I decided to take on the
            bootcamp independently, aiming to enhance my skills and knowledge in
            various areas such as{" "}
            <strong>
              Test Driven Development, Data Structures and Algorithms, React,
              Structured Query Language (SQL), Docker, Microservices
            </strong>
            , and more.
          </p>
          <p>
            What makes App Academy particularly appealing is their curriculum,
            which not only covers advanced concepts but also emphasizes
            essential principles. They teach the{" "}
            <strong>
              importance of writing clean code, provide debugging techniques,
              testing strategies, and understanding JavaScript errors
            </strong>
            . Furthermore, the program offers valuable hands-on experience
            through small and <strong>capstone projects</strong>.
          </p>

          <p>
            With the opportunity to be selected, I am confident that I can be a
            valuable resource for your company's requirements. Combining my
            academic background, certifications, and learning from the
            experiences within your organization, my ultimate goal is to become
            a skilled <strong>Full-Stack Software Engineer</strong> and apply my expertise in a
            professional setting.
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
            <a className={`${styles.button} ${styles.btn}`} onClick={openModal} href="#about">
              Contact Me
            </a>
          </div>
        </section>
      </div>
      <section className={styles.test}>
          <hr></hr>
          </section>
    </div>
  );
}

export default About;
