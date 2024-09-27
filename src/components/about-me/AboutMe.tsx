import styles from "./about-me.module.css";

type AboutMeProps = {
  title: string;
  subtitle: string;
  location: string;
  description: string;
};

const AboutMe = ({ title, subtitle, location, description }: AboutMeProps) => {
  return (
    <main id="about">
      <div className={styles.header}>
        <div className={styles["header__content"]}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className={styles.avatar}></div>
      </div>

      <div className={styles.hero}>
        <div>
          <h3 className={styles.devname}>Piotr Słupski</h3>
          <p>Based in {location}</p>
        </div>

        <div>
          <h3 className={styles["about-header"]}>About me</h3>
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
