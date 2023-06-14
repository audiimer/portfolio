import React, { useState } from 'react';
import styles from '../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const CarouselComponent = () => {
  const carouselItems = [
    {
      image: require('../images/projects/vending-machine.png'),
      title: 'Vending Machine',
      description: 'The vending machine app features a sophisticated product inventory system and a secure PIN authentication mechanism.',
      codeSource: 'https://github.com/audiimer/vending-machine',
    },
    {
      image: require('../images/projects/tic-tac-toe.png'),
      title: 'Tic Tac Toe',
      description: 'Classic Tic Tac Toe app with dynamic gameplay against human or AI opponents, with customizable symbol selection of X or O.',
      codeSource: 'https://github.com/audiimer/tic-tac-toe-beta',
    },
    {
      image: require('../images/projects/todo-list.png'),
      title: 'Todo list',
      description: 'This app represents a simple todo list where you can add or remove items from the list.',
      codeSource: 'https://github.com/audiimer/palindrome-app',
    },
    {
      image: require('../images/projects/first-portfolio.png'),
      title: 'First Portfolio',
      description: 'This was the first portfolio I created using plain HTML/CSS and JavaScript.',
      codeSource: 'https://github.com/audiimer/palindrome-app',
    },
    {
      image: require('../images/projects/palindrome.png'),
      title: 'Palindrome Checker',
      description: 'The palindrome checker app accepts user input and employs an algorithm to determine whether the entered word qualifies as a palindrome.',
      codeSource: 'https://github.com/audiimer/palindrome-app',
    },
    {
      image: require('../images/projects/google-drive-download.png'),
      title: 'Google Drive Download',
      description: 'This app takes a Google Drive link and generates a direct download link, as well as offers audio and video/document embedding functionalities.',
      codeSource: 'https://github.com/audiimer/google-direct-download-link-generator',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateActiveItem = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return carouselItems.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === carouselItems.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (

    <div className={styles.carousel} id='projects'>
      <div className={styles.carouselInner}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={item.image} className={styles.carouselImage} alt="..." />
            <div className={styles.carouselCaption}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <a
                href={item.codeSource}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Source
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
        <i><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></i>
      </button>
      <button
        className={styles.carouselControlNext}
        type="button"
        onClick={handleNextClick}
      >
        <i><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></i>
      </button>
    </div>

  );
};

export default CarouselComponent;
