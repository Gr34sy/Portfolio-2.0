import styles from "./projects.module.css";
import { project } from "../../lib/projects";
import { projects } from "../../lib/projects";

const Projects = () => {
  function Card({ project }: { project: project }) {
    return (
      <div className={styles.card}>
        <div>
          <img
            src={project.image}
            alt={`preview of ${project.title}`}
            className={styles["preview-image"]}
          />
        </div>

        <div className={styles["card-content"]}>
          <h4>{project.title}</h4>

          <div className={styles["card-stack"]}>
            {project.stack.map((skill, i) => (
              <div className={styles.skill} key={`${i}-${skill}`}>
                {skill}
              </div>
            ))}
          </div>

          <p className={styles["card-description"]}>{project.description}</p>

          <div className={styles.buttons}>
            <a href={project.preview} target="_blank" rel="noopener noreferrer">
              Preview
            </a>

            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.section} id="projects">
      <h3 className="header-title">Projects</h3>

      <div className={styles.projects}>
        {projects.map((project, i) => (
          <Card project={project} key={`${i}-${project}`} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
