import styles from "./experience.module.css";
import { skill } from "../../lib/skills";
import { frontendSkills, backendSkills, otherSkills } from "../../lib/skills";

const Experience = () => {
  function Card({ stack, skills }: { stack: string; skills: skill[] }) {
    return (
      <div className={styles.card}>
        <h4>{stack}</h4>
        <ul className={styles["card-list"]}>
          {skills.map((skill, i) => {
            return (
              <li key={`${i}-${skill}`}>
                <img
                  src={skill.devicon}
                  alt={`${skill.name} logo`}
                  className={styles.devicon}
                />
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className={styles.separator} id="tech-stack"></div>
      <section className={styles.section}>
        <h3 className="header-title">Tech Stack</h3>
        <div className={styles.cards}>
          <Card stack="Frontend" skills={frontendSkills} />
          <Card stack="Backend" skills={backendSkills} />
          <Card stack="Other" skills={otherSkills} />
        </div>
      </section>
    </>
  );
};

export default Experience;
