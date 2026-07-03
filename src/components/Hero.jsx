import styles from './Hero.module.css'

const stats = [
  { num: '5+',    lbl: 'Years designing and deploying real-time AI systems' },
  { num: '19',    lbl: 'Engineers and students mentored across 3 universities' },
  { num: '1K fps', lbl: 'Achieved with event-based sensor pipelines' },
  { num: '58ms',  lbl: 'Neural network inference on a $15 microcontroller' },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      {/* ── Top strip: name + photo ── */}
      <div className={styles.nameRow}>
        <div className={styles.nameBlock}>
          <span className={styles.eyebrow}>Lebanon &nbsp;·&nbsp; Available Internationally</span>
          <h1 className={styles.name}>
            Joelle<br />
            <span className={styles.nameAccent}>Khalil</span>
          </h1>
        </div>
        <div className={styles.photoWrap}>
          <img
            src="/joelle.jpg"
            alt="Joelle Khalil"
            className={styles.photo}
          />
        </div>
      </div>

      {/* ── Bottom strip: bio + stats ── */}
      <div className={styles.bottomRow}>
        <div className={styles.bioCol}>
          <p className={styles.title}>
            <strong>Senior Computer Vision &amp; Embedded AI Engineer.</strong>{' '}
            Founding-team engineer with 5+ years shipping real-time vision
            systems, edge AI pipelines, and embedded hardware solutions from
            first prototype to production deployment.
          </p>
          <div className={styles.ctas}>
            <a
              href="https://linkedin.com/in/joellekhalil1997"
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              LinkedIn Profile
            </a>
            <a
              href="/Joelle_Khalil_CV_ATS_English.pdf"
              download
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Download CV (EN)
            </a>
            <a
              href="/Joelle_Khalil_CV_ATS_French.pdf"
              download
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Télécharger CV (FR)
            </a>
          </div>
          <div className={styles.langs}>
            <span>English C2</span>
            <span>French C2</span>
            <span>Arabic C2</span>
          </div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map(({ num, lbl }) => (
            <div key={num} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLbl}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
