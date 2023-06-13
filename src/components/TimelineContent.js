import React, { useState } from 'react';
import styles from '../styles.module.css';
import Experience from './Experience';
import Education from './Education';
import TimelineOptions from './TimelineOptions';
import Certification from './Certification';
import CarouselComponent from './CarouselComponent';

function TimelineContent() {
  const [activeComponent, setActiveComponent] = useState("projects");
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleComponentClick = (component) => {
    setIsFadingOut(true);

    setTimeout(() => {
      setActiveComponent(component);
      setIsFadingOut(false);
    }, 300); // Adjust the delay to match your CSS transition duration

  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "projects":
        return (
          <div className={`${styles.container} ${isFadingOut ? styles.fadeOut : styles.fadeIn}`}>
            <CarouselComponent />
          </div>
        );
      case "experience":
        return (
        <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}><Experience /></div>
        );
      case "education":
        return (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}><Education /></div>
          );
      case "certification":
        return (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}><Certification /></div>
          );
      default:
        return null;
    }
  };

  return (
    <div>

      <TimelineOptions setActiveComponent={handleComponentClick} />

      {renderComponent()}
    </div>
  );
}

export default TimelineContent;
