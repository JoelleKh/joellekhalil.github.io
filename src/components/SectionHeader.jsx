import styles from './SectionHeader.module.css'

export default function SectionHeader({ eyebrow, heading }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.eye}>{eyebrow}</span>
      <h2 className={styles.head}>{heading}</h2>
    </div>
  )
}
