import React, { useState } from "react";
import styles from "../styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CarouselComponent = () => {
  const carouselItems = [
    {
      imageMobile: require("../images/projects/mobile/vending-machine.png"),
      imageDesktop: require("../images/projects/desktop/vending-machine.png"),
      title: "Vending Machine / HTML, CSS, JavaScript",
      description:
        "The vending machine app features a sophisticated product inventory system and a secure PIN authentication mechanism.",
      codeSource: "https://audiimer.github.io/vending-machine/",
    },
    {
      imageMobile: require("../images/projects/mobile/calculator.png"),
      imageDesktop: require("../images/projects/desktop/calculator.png"),
      title: "Calculator / React.js",
      description: "This is a basic calculator app built using React.js",
      codeSource: "https://audiimer.github.io/react-calculator/",
    },
    {
      imageMobile: require("../images/projects/mobile/tic-tac-toe.png"),
      imageDesktop: require("../images/projects/desktop/tic-tac-toe.png"),
      title: "Tic Tac Toe / HTML, CSS, JavaScript",
      description:
        "Classic Tic Tac Toe app with dynamic gameplay against human or computer, you can choose to play between X or O.",
      codeSource: "https://audiimer.github.io/tic-tac-toe/",
    },
    {
      imageMobile: require("../images/projects/mobile/todo-list.png"),
      imageDesktop: require("../images/projects/desktop/todo-list.png"),
      title: "Todo list / React.Js",
      description:
        "This app represents a simple todo list where you can add or remove items from the list.",
      codeSource: "https://audiimer.github.io/todo-list-react/",
    },
    {
      imageMobile: require("../images/projects/mobile/first-portfolio.png"),
      imageDesktop: require("../images/projects/desktop/first-portfolio.png"),
      title: "First Portfolio / HTML, CSS, JavaScript",
      description:
        "This was the first portfolio I created using plain HTML/CSS and JavaScript.",
      codeSource: "https://audiimer.github.io/first-portfolio/",
    },
    {
      imageMobile: require("../images/projects/mobile/palindrome.png"),
      imageDesktop: require("../images/projects/desktop/palindrome.png"),
      title: "Palindrome Checker / HTML, CSS, JavaScript",
      description:
        "The palindrome checker app accepts user input and employs an algorithm to determine whether the entered word qualifies as a palindrome.",
      codeSource: "https://audiimer.github.io/palindrome-app/",
    },
    {
      imageMobile: require("../images/projects/mobile/google-drive-download.png"),
      imageDesktop: require("../images/projects/desktop/google-drive-download.png"),
      title: "Google Drive Download / HTML, CSS, JavaScript",
      description:
        "This app takes a Google Drive link and generates a direct download link, as well as offers audio and video/document embedding functionalities.",
      codeSource:
        "https://audiimer.github.io/google-direct-download-link-generator/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCodeSource, setCurrentCodeSource] = useState(
    carouselItems[0].codeSource
  );

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1;
      setCurrentCodeSource(carouselItems[newIndex].codeSource);
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1;
      setCurrentCodeSource(carouselItems[newIndex].codeSource);
      return newIndex;
    });
  };

  return (
    <div className={styles.carousel} id="options">
      <div className={styles.carouselInner}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <img
              src={
                window.innerWidth >= 576 ? item.imageDesktop : item.imageMobile
              }
              className={styles.carouselImage}
              alt="..."
            />
            <div className={styles.carouselCaption}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <a
                href={currentCodeSource}
                className={`${styles.button} ${styles.btn}`}
                target="_blank"
                rel="noreferrer"
              >
                Code Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.carouselControlPrev}
        type="button"
        onClick={handlePrevClick}
      >
        <i>
          <FontAwesomeIcon icon={faArrowLeft} />
        </i>
      </button>
      <button
        className={styles.carouselControlNext}
        type="button"
        onClick={handleNextClick}
      >
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </button>
    </div>
  );
};

export default CarouselComponent;
