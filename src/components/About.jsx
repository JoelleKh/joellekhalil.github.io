import SectionHeader from './SectionHeader'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader eyebrow="About" heading={`The Full-Stack\nEngineer`} />
        <div className={styles.grid}>

          <div className={styles.text}>
            <p>
              As <strong>Lead Research Engineer and founding team member at Oculi</strong>, a
              deep-tech semiconductor company developing a disruptive AI vision sensing architecture
              for real-time edge intelligence. Over 3.5 years I grew from Application Engineer to
              Lead Research Engineer, shipping production CV systems operating at up to{' '}
              <strong>1,000 fps</strong> using Dynamic Vision Sensors.
            </p>
            <p>
              What sets my profile apart is the depth across the full stack. I understand computer
              vision from first principles; from classical algorithms and event-based techniques to
              deep learning with PyTorch and TensorFlow and I take those systems all the way down
              to <strong>bare-metal embedded hardware</strong>. I deployed a neural network on a
              $15 STM32 microcontroller achieving 58ms inference entirely on-chip, with no GPU and
              no remote server.
            </p>
            <p>
              I am currently deepening my expertise in production embedded firmware at{' '}
              <strong>Beyond Silicon Solutions</strong>, mastering the hardware layer at the
              silicon level through cryptographic protocols, optical transceiver firmware, and
              low-level embedded systems engineering.
            </p>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sideLabel}>Based in Beirut, Lebanon</div>
            <div className={styles.langList}>
              {[
                { lang: 'English', level: 'C2 — Native' },
                { lang: 'French',  level: 'C2 — Native' },
                { lang: 'Arabic',  level: 'C2 — Native' },
              ].map(({ lang, level }) => (
                <div key={lang} className={styles.langItem}>
                  <span className={styles.langName}>{lang}</span>
                  <span className={styles.langLevel}>{level}</span>
                </div>
              ))}
            </div>
            <div className={styles.tagsBlock}>
              <div className={styles.sideLabel}>Specialisations</div>
              <div className={styles.tags}>
                {['Computer Vision', 'Edge AI', 'FPGA', 'Embedded C++', 'PyTorch', 'TinyML'].map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
