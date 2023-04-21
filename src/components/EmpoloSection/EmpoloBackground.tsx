import styles from "./empoloSection.module.scss";

export const EmpoloBackground = ({ url }: any) => {
  return (
    <section className={styles.component}>
      <video className={styles.video} src={url.mediaURL} autoPlay loop muted />
    </section>
  )
};
