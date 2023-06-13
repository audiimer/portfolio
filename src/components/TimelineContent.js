import React from 'react'
import styles from "../styles.module.css"
import Test from './Carousel'
import Experience from './Experience'
import Education from './Education'
import TimelineOptions from './TimelineOptions'
import Certification from './Certification'

function TimelineContent() {
  return (
    <div>
        {/* <div className={styles.container}>
            <Carousel</Carousel>
        </div> */}
        <div>
            <TimelineOptions></TimelineOptions>
            <section>
                {/* <Experience></Experience> */}
            </section>
        </div>
        <div>
            {/* <section><Education></Education></section> */}
        </div>
        <div>
            <section><Certification></Certification></section>
        </div>

    </div>
  )
}

export default TimelineContent
