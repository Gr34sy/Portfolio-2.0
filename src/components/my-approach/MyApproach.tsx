import styles from "./my-approach.module.css";

const MyApproach = () => {
  return (
    <>
      <div className={styles.separator} id="approach"></div>
      <section className={styles.section}>
        <h3 className="header-title">My Approach</h3>

        <div className={styles.cards}>
          <div className={styles.card}></div>
        </div>
      </section>
    </>
  );
};

export default MyApproach;
