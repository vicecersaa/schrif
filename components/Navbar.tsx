"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "What we do", href: "/what-we-do" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" }, { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className={styles.nav}>
    <div className={styles.inner}>
      <Link href="/" className={styles.logo} aria-label="Schrif home"><img src="/logo.png" alt="Schrif" width={112} height={24} /></Link>
      <nav className={`${styles.links} ${open ? styles.open : ""}`} aria-label="Primary">
        {links.map((link) => <Link key={link.label} href={link.href} className={`${styles.link} ${pathname === link.href ? styles.active : ""}`} onClick={() => setOpen(false)}>{link.label}</Link>)}
      </nav>
      <div className={styles.actions}>
        <Link href="/connect" className={`${styles.contact} ${pathname === "/connect" ? styles.active : ""}`}>Contact</Link>
        <Link href="/connect" className={`btn btn--lime ${styles.cta}`}>Ready to Build <span aria-hidden="true">↗</span></Link>
        <button className={styles.burger} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
    </div>
  </header>;
}
