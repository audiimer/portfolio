import React from 'react'
import styles from "../styles.module.css"
import profile from "../images/profilepic.jpg"

function About() {
    return (
        <div id='about'>
            <div className={`${styles.container} ${styles.transitioneffect}`}>
                <span className={styles.bordertl}></span>
                <span className={styles.bordertr}></span>
                <span className={styles.borderbl}></span>
                <span className={styles.borderbr}></span>
                <section className={styles.aboutsection1}>
                    <img src={profile} alt="Image" width={200} />
                    <button className={styles.btn}>LinkedIn Profile</button>
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
                    <button className={styles.btn}>Download Resume</button>
                    <button className={styles.btn}>Contact Me</button>
                </section>
            </div>
        </div>
    );
}

export default About
