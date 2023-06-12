import React from 'react'
import styles from "../styles.module.css"
import logo from "../images/intropic.jpg"

function Intro() {
    return (
        <div>
            <div className={styles.intro}>
                <section>
                    <p>Hello!</p>
                    <h1>I'm Audis Mercado</h1>
                    <h3>Computer Science Graduate & Self-Taught Programmer</h3>
                    <button className={styles.btn}>About Me</button>
                </section>
                <section className={styles.imgcontainer}>
                    <img src={logo} alt="Image"  />
                </section>
            </div>
        </div>
    );
}

export default Intro
