import React from 'react'
import styles from "../styles.module.css"
import logo from "../images/intropic.jpg"

function Intro() {
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {
        letter.addEventListener('mouseleave', () => {
            letter.classList.add('bounce');
            setTimeout(() => {
                letter.classList.remove('bounce');
            }, 1000);
        });
    });
    return (
        <div>
            <div className={styles.intro}>
                <section>
                    <p>Hello!</p>
                    <h1>
                        <span className={styles.letter}>I</span>
                        <span>'</span>
                        <span className={styles.letter}>m</span>
                        <span> </span>
                        <span className={styles.letter}>A</span>
                        <span className={styles.letter}>u</span>
                        <span className={styles.letter}>d</span>
                        <span className={styles.letter}>i</span>
                        <span className={styles.letter}>s</span>
                        <span> </span>
                        <span className={styles.letter}>M</span>
                        <span className={styles.letter}>e</span>
                        <span className={styles.letter}>r</span>
                        <span className={styles.letter}>c</span>
                        <span className={styles.letter}>a</span>
                        <span className={styles.letter}>d</span>
                        <span className={styles.letter}>o</span>
                    </h1>
                    <ul className={styles.introTitle}>
                        <li><a href="#">Computer Science Graduate & Self-Taught Programmer</a></li>
                    </ul>
                    <a className={styles.btn} href='#about'>About Me</a>
                </section>
                <section className={styles.imgcontainer}>
                    <img src={logo} alt="intropic" />
                </section>
            </div>
        </div>
    );
}

export default Intro
