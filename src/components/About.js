import React, { useState } from "react";
import styles from "../styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

import CustomModal from "./CustomModal";
import Biography from "./Biography";

function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* modal stays here so it can overlay the whole page */}
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className={styles.separator}>
        {/* ── heading with footprints ── */}
        <h1 id="bio" className={styles.journeyTitle}>
          About Me{" "}
        </h1>
        <hr />
      </section>

      {/* hand the callback down */}
      <Biography onContact={() => setModalOpen(true)} />

      {/* ── “My Journey” separator ── */}
      <section id="journey" className={styles.separator}>
        <h1 className={styles.journeyTitle}>
          My Journey{" "}
          <span className={styles.prints} aria-hidden="true">
            <FontAwesomeIcon icon={faShoePrints} />
            <FontAwesomeIcon icon={faShoePrints} />
            <FontAwesomeIcon icon={faShoePrints} />
          </span>
        </h1>
        <hr />
      </section>
    </div>
  );
}

export default About;
