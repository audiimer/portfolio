import React from 'react';
import styles from '../styles.module.css';
import Logo from './Logo';


function Header() {
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
            <a href="/projects" >
              Projects
            </a>
          </li>
          <li>
            <a href="/experience" >
              Experience
            </a>
          </li>
          <li>
            <a href="/education" >
              Education
            </a>
          </li>
          <li>
            <a href="/certification" >
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
