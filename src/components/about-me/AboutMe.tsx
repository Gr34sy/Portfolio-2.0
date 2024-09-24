import styles from "./about-me.module.css";

type AboutMeProps = {
  title: string;
  subtitle: string;
};

const AboutMe = ({ title, subtitle }: AboutMeProps) => {
  return (
    <main>
      <div className={styles.header}>
        <div className={styles["header__content"]}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className={styles.avatar}></div>
      </div>
    </main>
  );
};

export default AboutMe;
