import styles from "./About.module.css";
import Seo from "../../components/seo/Seo";

export default function About() {
  return (
    <main className={styles.main}>
      <Seo title="About" />
      <h1 className={styles.about_title}>About Us</h1>
      <div>
        <p className={styles.about_text}>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </p>
        <p className={styles.about_text}>We hope you enjoy your stay!</p>
      </div>
    </main>
  );
}
