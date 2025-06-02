import React, { useEffect } from "react";
import styles from "../styles.module.css";
import logo from "../images/intropic.jpg";

export default function Intro() {
  /* parallax setup stays the same */
  useEffect(() => {
    const handler = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        `${window.pageYOffset}px`
      );
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* NEW: manual smooth scroll that accounts for header height */
  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutEl = document.getElementById("about");
    const headerEl = document.querySelector("header");
    if (aboutEl && headerEl) {
      const headerHeight = headerEl.getBoundingClientRect().height;
      const targetY =
        aboutEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.intro}>
        <span className={`${styles.slice} ${styles.sliceTop}`} />
        <span className={`${styles.slice} ${styles.sliceRight}`} />

        <section>
          <h1>Audis Mercado</h1>
          <ul className={styles.introTitle}>
            <li>Senior Software Analyst | Lehigh University</li>
            <li>Library & Technology Services</li>
          </ul>
        </section>

        <section className={styles.imgcontainer}>
          <img src={logo} alt="Audis Mercado" />
        </section>
      </div>
    </div>
  );
}
