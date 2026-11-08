import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return <footer className="footer">
    <div className={`${styles.inner} footer__inner`}>
      <Link href="/" className={styles.brand} aria-label="Schrif home"><img src="/logo.png" alt="Schrif" width={150} height={32} /></Link>
      <nav className={styles.links} aria-label="Footer"><Link href="/about">About Us</Link><Link href="/connect">Contact Us</Link><Link href="/terms-of-service">Terms of Service</Link></nav>
    </div>
    <div className={`${styles.bottom} footer__bottom`}><span>SCHRIF / BUILT WITH INTENT.</span><span>END OF PAGE. START OF SOMETHING. →</span></div>
  </footer>;
}
