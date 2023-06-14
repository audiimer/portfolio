import React from 'react';
import styles from "../styles.module.css";

function TimelineOptions({ setActiveComponent, activeComponent }) {
  const isActive = (component) => {
    return component === activeComponent ? styles.active : '';
  };

  return (
    <div id='options'>
      <section className={styles.timeline}>
        <button
          className={`${styles.timelinebtn} ${isActive('projects')}`}
          onClick={() => setActiveComponent('projects')}
        >
          <p>Projects</p>
        </button>
        <button
          className={`${styles.timelinebtn} ${isActive('experience')}`}
          onClick={() => setActiveComponent('experience')}
        >
          <p>Experience</p>
        </button>
        <button
          className={`${styles.timelinebtn} ${isActive('education')}`}
          onClick={() => setActiveComponent('education')}
        >
          <p>Education</p>
        </button>
        <button
          className={`${styles.timelinebtn} ${isActive('certification')}`}
          onClick={() => setActiveComponent('certification')}
        >
          <p>Certification</p>
        </button>
      </section>
    </div>
  );
}

export default TimelineOptions;
