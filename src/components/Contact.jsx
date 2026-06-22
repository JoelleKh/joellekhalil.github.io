import { useState } from 'react'
import SectionHeader from './SectionHeader'
import styles from './Contact.module.css'

const contactLinks = [
  { label: 'joellekhalil97@gmail.com', type: 'Email',     href: 'mailto:joellekhalil97@gmail.com' },
  { label: '+961 76 44 71 36',         type: 'Phone LB',  href: 'tel:+96176447136' },
  { label: '+33 6 83 85 42 88',        type: 'Phone FR',  href: 'tel:+33683854288' },
  { label: 'linkedin.com/in/joellekhalil1997', type: 'LinkedIn', href: 'https://linkedin.com/in/joellekhalil1997', target: '_blank' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mdavwona', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Contact" heading={`Let's Work\nTogether`} />
        <div className={styles.grid}>

          <div className={styles.info}>
            <h3 className={styles.infoHeading}>Get in Touch</h3>
            <p className={styles.infoText}>
              Senior Computer Vision &amp; Embedded AI Engineer based in Lebanon, available for
              international opportunities. Trilingual: English · French · Arabic.
            </p>
            <div className={styles.links}>
              {contactLinks.map(({ label, type, href, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? 'noreferrer' : undefined}
                  className={styles.link}
                >
                  <span className={styles.linkLabel}>{label}</span>
                  <span className={styles.linkType}>{type}</span>
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What is this about?" value={form.subject} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message..." required value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <div className={`${styles.statusMsg} ${styles.success}`}>
                Message sent. I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className={`${styles.statusMsg} ${styles.error}`}>
                Something went wrong. Please email me directly at joellekhalil97@gmail.com
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
