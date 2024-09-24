import styles from "./experience.module.css";
import { skill } from "../../lib/skills";

const Experience = () => {
  function Card({ stack, skills }: { stack: string; skills: skill[] }) {
    return (
      <div className={styles.card}>
        <h4>{stack}</h4>
        <div>
          {skills.map((skill) => {
            return <div>{skill.name}</div>;
          })}
        </div>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <h3 className="header-title">Experience</h3>
      <div>
        <Card
          stack="Frontend"
          skills={[
            { name: "JS", devicon: "" },
            { name: "React", devicon: "" },
            { name: "Next", devicon: "" },
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
