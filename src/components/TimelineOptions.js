import React from 'react';
import styles from '../styles.module.css';

function TimelineOptions({ setActiveComponent, activeButton, setActiveButton }) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };

  return (
    <div id="options">
      <section className={styles.timeline}>
        <button href="#options"
          className={`${styles.timelinebtn} ${activeButton === "projects" ? styles.active : ''}`}
          onClick={() => handleButtonClick("projects")}
        >
          <p>Projects</p>
        </button>
        <button
          className={`${styles.timelinebtn} ${activeButton === "experience" ? styles.active : ''}`}
          onClick={() => handleButtonClick("experience")}
        >
          <p>Experience</p>
        </button>
        <button
          className={`${styles.timelinebtn} ${activeButton === "education" ? styles.active : ''}`}
          onClick={() => handleButtonClick("education")}
        >
          <p>Education</p>
        </button>
        <button
          className={`${styles.timelinebtn} ${activeButton === "certification" ? styles.active : ''}`}
          onClick={() => handleButtonClick("certification")}
        >
          <p>Certification</p>
        </button>
      </section>
    </div>
  );
}

export default TimelineOptions;
