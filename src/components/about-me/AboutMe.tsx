import styles from "./about-me.module.css";

type AboutMeProps = {
  title: string;
  subtitle: string;
  location: string;
  paragraphs: string[];
};

const AboutMe = ({ title, subtitle, location, paragraphs }: AboutMeProps) => {
  return (
    <main id="about">
      <div className={styles.header}>
        <div className={styles["header__content"]}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className={styles.avatar}></div>
      </div>

      <div className={styles.hero}>
        <div>
          <h2 className={styles.devname}>Piotr Słupski</h2>
          <p>Based in {location}</p>
        </div>

        <div className={styles.description}>
          <h3>About me</h3>

          {paragraphs.map((p, i) => (
            <p key={`about-p-${i}`}>{p}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
