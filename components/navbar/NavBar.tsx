import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar_link}>
        Home
      </Link>
      <Link href="/about" className={styles.navbar_link}>
        About
      </Link>
    </nav>
  );
}
