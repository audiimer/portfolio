import React from 'react'
import styles from "../styles.module.css"
import Slider from './Slider'

function TimelineContent() {
  return (
    <div>
        <div className={styles.container}>
            <Slider></Slider>
        </div>
        <div>
            <section></section>
        </div>
        <div>
            <section></section>
        </div>
        <div>
            <section></section>
        </div>

    </div>
  )
}

export default TimelineContent
