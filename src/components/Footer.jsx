import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>Joelle Khalil</span>
      <span className={styles.copy}>© 2026 · Senior Computer Vision &amp; Embedded AI Engineer</span>
    </footer>
  )
}
