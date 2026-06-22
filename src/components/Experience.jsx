import SectionHeader from './SectionHeader'
import styles from './Experience.module.css'

const jobs = [
  {
    date: 'November 2023 – Present',
    role: 'Senior Embedded Systems Engineer',
    company: 'Beyond Silicon Solutions',
    location: 'Beirut, Lebanon',
    now: true,
    points: [
      'Joined to pursue deep expertise in production embedded systems — low-level firmware, hardware protocols, and cryptographic security at the silicon level',
      'Developed firmware for proprietary high-speed optical transceivers (SFP+ and QSFP) including OTN management, MACsec secure communication, and OIF-compliant interfaces (CMIS, SFF-8436)',
      'Implemented cryptographic modules: AES-CMAC, KDF, RFC 3394 — across 2 hardware platforms',
      'Conducted 10G optical testing and provided on-site technical support in the Netherlands',
    ],
  },
  {
    date: 'February 2022 – November 2023',
    role: 'Founding Member & Lead Research Engineer',
    company: 'Oculi',
    location: 'Lebanon / Rochester, USA',
    now: false,
    points: [
      'Promoted to Lead Research Engineer within 2 years — driving R&D direction, university collaborations, and academic visibility',
      'Led 3 international R&D collaborations (University of Zurich, AUB, LAU) — mentoring 18 people across final-year projects and internships, and collaborating with 1 PhD student on SPU-related CV work',
      'Supervised Visual Odometry, stereo SLAM, and wildlife detection systems using event-based sensors',
      '4th place out of 29 global teams — TinyML Hackathon 2023, Vision Zero, City of San José',
    ],
  },
  {
    date: 'June 2020 – February 2022',
    role: 'Founding Member & Application Engineer',
    company: 'Oculi',
    location: 'Lebanon / Rochester, USA',
    now: false,
    points: [
      'Founding team member — contributed to core product architecture, sensor evaluation, and customer-facing demos from day one',
      "Developed and benchmarked real-time CV and ML pipelines using event-based sensors, spanning classical CV, deep learning (PyTorch, TensorFlow), and algorithms optimised for Oculi's proprietary SPU architecture",
      'Designed FPGA sensor pipelines (VHDL, MIPI) and worked with HD cameras, DVS, LiDAR, stereo, and thermal sensors; implemented NUC and pixel correction pipelines',
      'Cross-compiled and deployed C++ vision applications on Linux and PetaLinux via CMake',
    ],
  },
  {
    date: 'April 2019 – June 2020',
    role: 'FPGA Design Engineer',
    company: 'IPG Photonics',
    location: 'Beirut, Lebanon',
    now: false,
    points: [
      'Developed embedded software and simulations for 10G optical communication on Intel FPGA platforms',
      'Transmitted and received 10G OTU2 frames; designed I2C modules; automated coverage analysis with TCL',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Experience" heading={`Career\nTimeline`} />
        <div className={styles.list}>
          {jobs.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.meta}>
                <div className={styles.date}>{job.date}</div>
                <div className={styles.company}>{job.company}</div>
                <div className={styles.location}>{job.location}</div>
                {job.now && <div className={styles.nowBadge}>Current</div>}
              </div>
              <div className={styles.content}>
                <div className={styles.role}>{job.role}</div>
                <ul className={styles.points}>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
