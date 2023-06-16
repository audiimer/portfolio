import React,{ useState }  from 'react';
import styles from '../styles.module.css';
import Logo from './Logo';

function Header({ setActiveComponent, setActiveButton }) {


  const [isNavExpanded, setIsNavExpanded] = useState(false)
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

      <nav className={styles.navbar}>
      <div className={styles.logoArea}>
        <Logo></Logo>
      </div>
        <button className={styles.hamburger}  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg></button>
        <div className={
          isNavExpanded ? `${styles.navigationMenu} ${styles.expanded}` : ``}
        >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
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
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
