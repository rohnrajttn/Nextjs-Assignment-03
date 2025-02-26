import React from 'react'
import styles from './index.module.css';
import Link from 'next/link';
function Header() {
  return (
    <div>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/" className={styles.link}>Home</Link></li>
                <li className={styles.li}><Link href="/about" className={styles.link}>About</Link></li>
                <li className={styles.li}><Link href="/static" className={styles.link}>Blog</Link></li>
                <li className={styles.li}><Link href="/users" className={styles.link}>Users</Link></li>
                <li className={styles.li}><Link href="/Client" className={styles.link}>Client</Link></li>
            </ul>
            <button className={styles.button}>Login</button>
        </nav>
    </div>
  )
}

export default Header;