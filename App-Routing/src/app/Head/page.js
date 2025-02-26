
import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
function Head() {
  return (
    <div>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/" className={styles.link}>Home</Link></li>
                <li className={styles.li}><Link href="/SSR" className={styles.link}>SSR</Link></li>
                <li className={styles.li}><Link href="/static" className={styles.link}>Blog</Link></li>
                <li className={styles.li}><Link href="/users" className={styles.link}>Users</Link></li>
                <li className={styles.li}><Link href="/Client" className={styles.link}>Client</Link></li>
            </ul>
            <button className={styles.button}>Login</button>
        </nav>
    </div>
  )
}

export default Head;