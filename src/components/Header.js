import React from 'react';
import styles from '../styles.module.css';
import Logo from './Logo';

function Header({ setActiveComponent, activeButton, setActiveButton }) {
  const handleLinkClick = (event, component) => {
    event.preventDefault();
    const timelineOptionsElement = document.getElementById('options');
    if (timelineOptionsElement) {
      timelineOptionsElement.scrollIntoView();
      setActiveComponent(component);
      setActiveButton(component);
    }
  };

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
            <a href="#options" onClick={(event) => handleLinkClick(event, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#options" onClick={(event) => handleLinkClick(event, "experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#options" onClick={(event) => handleLinkClick(event, "education")}>
              Education
            </a>
          </li>
          <li>
            <a href="#options" onClick={(event) => handleLinkClick(event, "certification")}>
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
