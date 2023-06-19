import React, { useState, useRef, useEffect } from "react";
import styles from "../styles.module.css";
import Logo from "./Logo";

function Header({ setActiveComponent, setActiveButton }) {
  const [clickCount, setClickCount] = useState(0);
  const navbarRef = useRef(null);

  const handleLinkClick = (event, component) => {
    event.preventDefault();
    if (component === "projects" || component === "experience" || component === "education" || component === "certification") {
      const optionsElement = document.getElementById("options");
      if (optionsElement) {
        optionsElement.scrollIntoView({ behavior: "smooth" });
      }
      setActiveComponent(component);
      setActiveButton(component);
    } else {
      const targetElement = document.getElementById(component);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setClickCount(0);
  };

  const handleHamburgerClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const handleClickOutsideNavbar = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        clickCount % 2 === 1
      ) {
        setClickCount(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideNavbar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNavbar);
    };
  }, [clickCount]);

  const isNavExpanded =
    clickCount === 0
      ? styles.navigationMenu
      : clickCount === 0
      ? styles.navigationMenu
      : clickCount % 2 !== 0
      ? styles.expanded
      : styles.collapsed;

  return (
    <div className={styles.header}>
      <nav className={styles.navbar} ref={navbarRef}>
        <div className={styles.logoArea}>
          <Logo />
        </div>
        <button className={styles.hamburger} onClick={handleHamburgerClick}>
          <svg
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
          </svg>
        </button>
        <div className={`${styles.navigationMenu} ${isNavExpanded}`}>
          <ul>
            <li>
              <a href="#intro" onClick={(event) => handleLinkClick(event, "intro")}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={(event) => handleLinkClick(event, "about")}>About</a>
            </li>
            <li>
              <a
                href="#options"
                onClick={(event) => handleLinkClick(event, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#options"
                onClick={(event) => handleLinkClick(event, "experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#options"
                onClick={(event) => handleLinkClick(event, "education")}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#options"
                onClick={(event) => handleLinkClick(event, "certification")}
              >
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
