import React, { useState } from 'react'
import styles from "../styles.module.css"
import profile from "../images/profilepic.jpg"
import CustomModal from './CustomModal';

function About() {

    const [modalOpen, setModalOpen] = useState(false); // Move the state to the top level
    const openModal = () => setModalOpen(true); // Move the function to the top level
    const closeModal = () => setModalOpen(false); // Move the function to the top level
    return (
        <div id='about'>
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
                    <label htmlFor="secondEmail">Secondary Email: audisg.mercado@gmail.com</label>
                </form>
            </CustomModal>

            <div className={`${styles.container} ${styles.transitioneffect}`}>
                <span className={styles.bordertl}></span>
                <span className={styles.bordertr}></span>
                <span className={styles.borderbl}></span>
                <span className={styles.borderbr}></span>
                <section className={styles.aboutsection1}>
                    <img src={profile} alt="profilepic" width={200} />
                    <a className={styles.btn} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/audis-mercado/">
                        LinkedIn Profile
                    </a>
                </section>
                <section className={styles.aboutsection2}>
                    <h3>console.log("Hello, World!");</h3>

                    <p>My name is Audis Mercado. I hold a <strong>Bachelor in Business Administration / Human Resource Management</strong>,
                        an <strong>Associate of Applied Sciences in Computer Science</strong>, and have completed
                        an IT bootcamp where I obtained the Google IT Support Professional Certificate.
                        Subsequently, I made the decision to focus on becoming a self-taught programmer.
                        I started by purchasing courses on platforms like Udemy and Coursera, through which
                        I acquired certifications in programming languages such as <strong>Python and HTML/CSS &
                            JavaScript</strong> since I had already learned <strong>Java and C#</strong> during my time in school.</p>

                    <p>Initially, I intended to enroll in a coding bootcamp, but after extensive reading
                        and research, I discovered that <strong>App Academy</strong> offers their syllabus for free. Therefore,
                        I decided to undertake the bootcamp independently. My ultimate goal is to complete all
                        the available courses in the program and become a <strong>Full-Stack Software Engineer</strong>. So far,
                        I have made significant progress and have been able to create several projects. However,
                        I will not be satisfied until I have finished the entire curriculum and can apply my
                        skills and abilities in my professional career.</p>

                    <div className={styles.btnContainer}>
                    <a className={styles.btn}  target="_blank" rel="noreferrer" href={require('../amercadoresume.pdf')}>View Resume</a>
                    <a className={styles.btn} onClick={openModal} href='#about'>Contact Me</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About
