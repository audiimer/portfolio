import React from 'react'
import styles from "../styles.module.css"
import Test from './Carousel'
import Experience from './Experience'

function TimelineContent() {
  return (
    <div>
        {/* <div className={styles.container}>
            <Carousel</Carousel>
        </div> */}
        <div>
            <section>
                <Experience></Experience>
            </section>
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
