import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // scroll position

      if (scrollPosition > 195 && display === false) {
        setDisplay(true);
      } else if (scrollPosition < 195) {
        setDisplay(false);
      } else {
        return;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [display]);

  return (
    <nav
      className={display ? `${styles.navbar} ${styles.show}` : styles.navbar}
    >
      <ul className={styles.list}>
        <li>
          <a href="#about">About Me</a>
        </li>

        <li>
          <a href="#approach">Approach</a>
        </li>

        <li>
          <a href="#tech-stack">Tech Stack</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
