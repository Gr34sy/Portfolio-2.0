import styles from "./projects.module.css";
import { project } from "../../lib/projects";
import { projects } from "../../lib/projects";

const Projects = () => {
  function Card({ project }: { project: project }) {
    return (
      <div className={styles.card}>
        <div>IMAGE</div>

        <div className={styles["card-content"]}>
          <h4>{project.title}</h4>
          <p className={styles['card-description']}>{project.description}</p>

          <div className={styles["card-stack"]}>
            {project.stack.map((skill) => (
              <div className={styles.skill}>{skill}</div>
            ))}
          </div>

          <div className={styles.buttons}>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>

            <a href={project.preview} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <h3 className="header-title">Projects</h3>

      <div className={styles.projects}>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
