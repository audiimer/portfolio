import React, { useRef, useState, useEffect } from "react";
import styles from "../styles.module.css";
import profile from "../images/profilepic.jpg";
import resumePdf from "../amercadoresume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";

function Biography({ onContact }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -150px 0px", // fire 150px *before* the section's bottom enters
        threshold: 0, // any intersection triggers
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      className={[
        styles.bioHero,
        visible ? styles.animate : styles.hiddenLeft,
      ].join(" ")}
    >
      {/* ---------- LEFT PANE ---------- */}
      <aside className={styles.bioSide}>
        <div className={styles.avatarWrap}>
          <img src={profile} alt="Audis Mercado" />
          <span className={styles.avatarBadge}>
            <FontAwesomeIcon icon={faMugSaucer} />
          </span>
        </div>

        <h2 className={styles.enName}>Audis Mercado</h2>

        <p className={styles.role}>Senior Software Analyst</p>
        <p className={styles.org}>Lehigh University</p>

        <nav className={styles.socialRow}>
          <a
            href="https://github.com/audiimer"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/audis-mercado/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          {/* add more icons as <a>…</a> here */}
        </nav>
      </aside>

      {/* ---------- RIGHT PANE ---------- */}
      <div className={styles.bioMain}>
        <p>
          Hi, I’m <strong>Audis Mercado</strong>, a Senior Software Analyst at
          Lehigh University with a strong foundation in both technology and
          business.
        </p>

        <p>
          I hold degrees in Business Administration and Computer Science, and I
          manage key educational software platforms including{" "}
          <em>NVivo, Mathematica, Minitab</em>, and <em>Kivuto</em>.
        </p>

        <p>
          My role focuses on license provisioning, software usage analytics
          using tools like <em>Sassafras</em> and <em>Amazon QuickSight</em>,
          and leading process improvement initiatives within Library and
          Technology Services.
        </p>

        <p>
          I'm also learning how to use Drupal 11, which I started through my
          current job as part of earning internship credits. My goal is to
          eventually specialize in it—whether as a hobby or as a professional
          path through freelance, contract, or permanent work.{" "}
        </p>

        <p>
          If you’re interested in learning more, feel free to click the{" "}
          <strong>Contact Me</strong> button below!
        </p>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.btn}
            onClick={() =>
              window.open(resumePdf, "_blank", "noopener,noreferrer")
            }
          >
            View Resume
          </button>
          <button type="button" className={styles.btn} onClick={onContact}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Biography;
