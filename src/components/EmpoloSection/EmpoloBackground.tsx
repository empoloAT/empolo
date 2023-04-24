import styles from "./empoloSection.module.scss";

export const EmpoloBackground = ({url}: any) => {
  return (
    <section className={styles.component}>
      <video src={url} className={styles.video} autoPlay loop muted />
    </section>
  )
};
