import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/CV.pdf";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className={styles.separator} id="contact"></div>
      <footer className={styles.footer}>
        <h2 className="header-title">Contact</h2>

        <ul className={styles.container}>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            <a href="mailto:piotr.slupski17@gmail.com">
              piotr.slupski17@gmail.com
            </a>
          </li>

          <li>
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            <a href="https://github.com/Gr34sy">GitHub</a>
          </li>

          <li>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/piotr-słupski-greasy17/">
              LinkedIn
            </a>
          </li>

          <li>
            <FontAwesomeIcon className={styles.icon} icon={faCode} />
            <a href="https://www.codewars.com/users/Gr34sy">Codewars</a>
          </li>

          <li>
            <FontAwesomeIcon icon={faFile} className={styles.icon} />
            <a href={CV} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
