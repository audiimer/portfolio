import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import CarouselComponent from "./components/CarouselComponent";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import TimelineOptions from "./components/TimelineOptions";
import styles from "./styles.module.css";



function App() {
  const [activeComponent, setActiveComponent] = useState("projects");
  const [activeButton, setActiveButton] = useState("projects");
  const [isFadingOut, setIsFadingOut] = useState(false);


  const handleComponentClick = (component) => {
    if (component !== activeComponent) {
      setIsFadingOut(true);

      setTimeout(() => {
        setActiveComponent(component);
        setIsFadingOut(false);
      }, 200);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "projects":
        return (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
            <CarouselComponent />
          </div>
        );
      case "experience":
        return (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
            <Experience />
          </div>
        );
      case "education":
        return (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
            <Education />
          </div>
        );
      case "certification":
        return (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
            <Certification />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.bodyContainer}>
      <Header
        setActiveComponent={handleComponentClick}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

  <Intro />
  <About />
  <TimelineOptions
    setActiveComponent={handleComponentClick}
    activeButton={activeButton}
    setActiveButton={setActiveButton}
  />

  {renderComponent()}
</div>
  );
}

export default App;
