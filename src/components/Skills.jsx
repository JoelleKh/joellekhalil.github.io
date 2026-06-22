import SectionHeader from './SectionHeader'
import styles from './Skills.module.css'

const groups = [
  {
    title: 'Computer Vision & AI',
    tags: ['Computer Vision', 'Event-Based Vision', 'Visual SLAM', 'Visual Odometry', 'Object Detection', 'Object Tracking', 'Pose Estimation', 'YOLO', 'MediaPipe', 'Stereo Vision', 'Image Processing'],
  },
  {
    title: 'ML Frameworks & Tools',
    tags: ['PyTorch', 'TensorFlow', 'Edge Impulse', 'X-CUBE-AI', 'TinyML', 'Deep Learning', 'Machine Learning', 'Neural Networks'],
  },
  {
    title: 'Embedded & Edge AI',
    tags: ['Embedded C', 'Embedded C++', 'RTOS', 'ARM Cortex-M', 'STM32', 'Microchip PIC', 'Edge Inference', 'PetaLinux', 'Embedded Linux'],
  },
  {
    title: 'FPGA & Hardware',
    tags: ['VHDL', 'Verilog', 'Vivado', 'Quartus', 'ModelSim', 'MIPI Camera Interface', 'SFP+', 'QSFP', 'Intel FPGA'],
  },
  {
    title: 'Software & Platforms',
    tags: ['Python', 'C++', 'Linux', 'CMake', 'Bash', 'Git', 'Qt', 'TCL'],
  },
  {
    title: 'AI Automation & Modern Tools',
    tags: ['n8n', 'Ollama', 'Streamlit', 'Hugging Face', 'Gemini AI', 'Claude Code', 'Agentic AI', 'LLM Integration'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Skills" heading={`Technical\nExpertise`} />
        <div className={styles.grid}>
          {groups.map((g) => (
            <div key={g.title} className={styles.group}>
              <div className={styles.groupTitle}>{g.title}</div>
              <div className={styles.tags}>
                {g.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
