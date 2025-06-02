import React from "react";
import styles from "../styles.module.css";

export default function Header({ onContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={styles.header}>
      <div></div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button onClick={() => scrollTo("bio")}>About</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollTo("journey")}>Journey</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={onContact}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
