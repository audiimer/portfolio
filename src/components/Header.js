
import styles from '../styles.module.css';
import Logo from './Logo';
import { Anchor } from 'antd';
import React from 'react';
const { Link } = Anchor;

function Header({ setActiveComponent }) {
  function preventDefault(event) {
    event.preventDefault();
  }

  return (

    <div className={styles.header}>
      <div className={styles.logoArea}>
        <Logo></Logo>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
          <a href="#options" onClick={(event) => {
              event.preventDefault();
              const timelineOptionsElement = document.getElementById('options');
              if (timelineOptionsElement) {
                timelineOptionsElement.scrollIntoView();
                setActiveComponent("projects");
              }
            }}>
              Projects
            </a>
          </li>
          <li>
          <a href="#options" onClick={(event) => {
              event.preventDefault();
              const timelineOptionsElement = document.getElementById('options');
              if (timelineOptionsElement) {
                timelineOptionsElement.scrollIntoView();
                setActiveComponent("experience");
              }
            }}>
              Experience
            </a>
          </li>
          <li>
          <a href="#options" onClick={(event) => {
              event.preventDefault();
              const timelineOptionsElement = document.getElementById('options');
              if (timelineOptionsElement) {
                timelineOptionsElement.scrollIntoView();
                setActiveComponent("education");
              }
            }}>
              Education
            </a>
          </li>
          <li>
            <a href="#options" onClick={(event) => {
              event.preventDefault();
              const timelineOptionsElement = document.getElementById('options');
              if (timelineOptionsElement) {
                timelineOptionsElement.scrollIntoView();
                setActiveComponent("certification");
              }
            }}>
              Certification
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>





    </div>
  );
}

export default Header;
