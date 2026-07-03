import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import styles from './Projects.module.css'

const projects = [
  {
    featured: true,
    cat: 'Featured · Embedded AI',
    title: 'Embedded AI Currency Classifier — STM32 Neural Network Inference',
    desc: 'A complete end-to-end AI system where the neural network runs entirely on a $15 STM32H755 microcontroller. Trained on USD bill images (6 denominations: $1–$100) using Edge Impulse, deployed via X-CUBE-AI with INT8 quantization. Full pipeline: Termux image capture → n8n routing → Python bridge → STM32 inference → live dashboard. End to end in under 2 seconds.',
    metrics: ['58ms inference', '268KB flash', '393KB RAM', '95.4% accuracy', '$15 chip'],
    stack: ['STM32H755', 'Edge Impulse', 'X-CUBE-AI', 'n8n', 'Python', 'Termux', 'Lovable'],
    video: '/0523.mp4',
  },
  {
    featured: false,
    cat: 'AI Automation · Data Pipelines',
    title: 'AI Market Intelligence System',
    desc: 'Fully automated real-time market intelligence tracking cryptocurrency (BTC, ETH, SOL) and commodities (Gold, Silver) via APIs. Computes momentum-based signals with confidence scoring, integrates Gemini AI for contextual market commentary, and delivers automated alerts via email and Telegram, runs multiple times per day with no manual intervention.',
    metrics: [],
    stack: ['n8n', 'Gemini AI', 'Python', 'Lovable', 'Telegram'],
    video: '/ai_market_analysis.mp4',
  },
  {
    featured: false,
    cat: 'Edge AI · Privacy',
    title: 'Behavioral State Monitoring System',
    desc: 'Real-time behavioural tracking pipeline using Samsung Watch events and MacroDroid triggers. Time-series metrics in Streamlit with a locally-hosted LLM (Ollama) for privacy-first adaptive insights , fully local, no data leaving the device.',
    metrics: [],
    stack: ['Python', 'Ollama', 'Streamlit', 'MacroDroid'],
    video: '/0222.mp4',
  },
  {
    featured: false,
    cat: 'AI Automation · Computer Vision',
    title: 'Smart Image Collector & Analyser',
    desc: 'Automated image capture from mobile devices and Meta smart glasses via Termux. n8n pipeline for GPS extraction, reverse geocoding, object detection, and LLM-generated summaries delivered as email digests , full pipeline from capture to structured insight with no manual steps.',
    metrics: [],
    stack: ['n8n', 'Termux', 'Hugging Face', 'Python'],
    video: '/smart_image.mp4',
  },
  {
    featured: false,
    cat: 'Automation',
    title: 'LinkedIn Activity Automation',
    desc: 'Automated LinkedIn notification and activity monitoring pipeline using Windows Task Scheduler, end-to-end automation from scheduled trigger to structured notification delivery with no manual steps.',
    metrics: [],
    stack: ['Windows Task Scheduler', 'Python'],
    video: '/linkedin_automation.mp4',
  },
]

function ProjectCard({ project }) {
  const videoRef = useRef(null)
  const wrapRef = useRef(null)

  function toggleVideo() {
    const v = videoRef.current
    const w = wrapRef.current
    if (!v) return
    if (v.paused) {
      document.querySelectorAll('video').forEach((el) => {
        if (el !== v) {
          el.pause()
          el.closest('[data-playing]')?.removeAttribute('data-playing')
        }
      })
      v.play()
      w.setAttribute('data-playing', 'true')
    } else {
      v.pause()
      w.removeAttribute('data-playing')
    }
  }

  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <div ref={wrapRef} className={styles.videoWrap} onClick={toggleVideo}>
        <video ref={videoRef} playsInline loop>
          <source src={project.video} type="video/mp4" />
        </video>
        <div className={styles.playBtn}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <div className={styles.body}>
        <div className={`${styles.cat} ${project.featured ? styles.catFeatured : ''}`}>
          {project.cat}
        </div>
        <div className={styles.title}>{project.title}</div>
        <p className={styles.desc}>{project.desc}</p>
        {project.metrics.length > 0 && (
          <div className={styles.metrics}>
            {project.metrics.map((m) => (
              <span key={m} className={styles.metric}>{m}</span>
            ))}
          </div>
        )}
        <div className={styles.stack}>
          {project.stack.map((s, i) => (
            <span key={s} className={styles.stag}>
              {s}{i < project.stack.length - 1 && <span className={styles.dot}> · </span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Projects" heading={`Built &\nShipped`} />
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
