import React from 'react';

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import styles from "../styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


  function Carousel() {

  return (

    <MDBCarousel showControls fade interval={20000}>

      <h1>My Projects</h1>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={require('../images/projects/vending-machine.png')}
        alt='...'


      >
        <div className={styles.carouselInner}>
          <h5>Vending Machine</h5>
          <p>The vending machine app features a sophisticated product inventory system and a secure PIN
                      authentication mechanism.</p>
          <button className={styles.btn}>Code Source</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={require("../images/projects/google-drive-download.png")}
        alt='...'
      >

        <div className={styles.carouselInner}>
          <h5>Todo List</h5>
          <p>This app represents a simple todo list where you can add or remove items from the list.</p>
          <button className={styles.btn}>Code Source</button>
        </div>

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={require("../images/projects/first-portfolio.png")}
        alt='...'
      >
        <div className={styles.carouselInner}>
          <h5>First Portfolio</h5>
          <p>This was the first portfolio I created using plain HTML/CSS and JavaScript</p>
          <button className={styles.btn}>Code Source</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={require("../images/projects/tic-tac-toe.png")}
        alt='...'
      >
        <div className={styles.carouselInner}>
          <h5>Tic Tac Toe</h5>
          <p>Classic Tic Tac Toe app with dynamic gameplay against human or AI opponents, with customizable
                      symbol selection of X or O.</p>
          <button className={styles.btn}>Code Source</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={require("../images/projects/todo-list.png")}
        alt='...'
      >
        <div className={styles.carouselInner}>
          <h5>Todo List</h5>
          <p>The palindrome checker app accepts user input and employs an algorithm to determine
                      whether the entered word qualifies as a palindrome.</p>
          <button className={styles.btn}>Code Source</button>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src={require("../images/projects/palindrome.png")}
        alt='...'
      >
        <div className={styles.carouselInner}>
          <h5>Palindrome Checker</h5>
          <p>The palindrome checker app accepts user input and employs an algorithm to determine
                      whether the entered word qualifies as a palindrome.</p>
          <button className={styles.btn}>Code Source</button>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>

  );
}

export default Carousel
