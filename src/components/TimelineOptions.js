import React from 'react'
import styles from "../styles.module.css"

function TimelineOptions() {
  return (
    <div>
        <section className={styles.timeline}>
        <button className={styles.timelinebtn}><p>Projects</p></button>
        <button className={styles.timelinebtn}><p>Experience</p></button>
        <button className={styles.timelinebtn}><p>Education</p></button>
        <button className={styles.timelinebtn}><p>Certification</p></button>
        </section>
    </div>
  )
}

export default TimelineOptions
