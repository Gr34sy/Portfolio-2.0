import { softSkill } from "../../lib/softSkills";
import styles from "./my-approach.module.css";
import { softSkills } from "../../lib/softSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyApproach = () => {
  function Card({ skill }: { skill: softSkill }) {
    return (
      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <div className={styles["card-front"]}>
            <FontAwesomeIcon icon={skill.icon} className={styles.icon} />
            <h3>{skill.name}</h3>
          </div>

          <div className={styles["card-back"]}>
            <p>{skill.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.separator} id="approach"></div>
      <section className={styles.section}>
        <h2 className="header-title">My Approach</h2>

        <div className={styles.cards}>
          {softSkills.map((skill, i) => {
            return <Card skill={skill} key={`${i}-${skill.name}`} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MyApproach;
