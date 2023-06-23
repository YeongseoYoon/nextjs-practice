import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
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
