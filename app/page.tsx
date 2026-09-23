'use client'

import { FormEvent, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, GitBranch, Link, Mail, Moon, Send, Sparkles, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const experiences = [
  { role: 'AI Automation Engineer Intern', company: 'Oldcastle Building Envelope', date: 'Jun 2026 — Present', location: 'Onsite', points: ['Architected 5+ end-to-end AI automation solutions across Operations, Finance, and Sales.', 'Orchestrated LLM workflows across Azure OpenAI, Snowflake, Power BI, and Fabric for intelligent document processing and task routing.', 'Consolidated 15,000 internal documents into structured datasets that improved AI agent accuracy and relevance.'] },
  { role: 'AI/ML Engineer Intern', company: 'Prognostic Optimization Group', date: 'Feb 2026 — Present', location: 'Remote', points: ['Developed an LLM-powered healthcare chatbot to improve symptom-triage conversations.', 'Built history-aware guardrails that prevented redundant questions across clinical domains.', 'Shipped structured-output validation and Docker-based production fixes for more consistent triage.'] },
]

const projects = [
  { number: '01', title: 'Smart Tutor AI', type: 'AI product · 2025—26', description: 'A personalized teaching system that turns course material into context-aware academic support, quizzes, and feedback.', tags: ['AWS Bedrock', 'RAG', 'LangChain', 'React'], accent: 'from-cyan-400/20 via-sky-500/5 to-transparent' },
]

const skillGroups = [
  ['AI & Machine Learning', ['Python', 'PyTorch', 'TensorFlow', 'NLP', 'RAG', 'Multi-agent systems', 'Prompt engineering', 'Model optimization']],
  ['AI Automation', ['Workflow orchestration', 'LLM agents', 'n8n', 'Power Automate', 'Document processing', 'Task routing', 'API integrations', 'Human-in-the-loop']],
  ['Cloud & MLOps', ['AWS', 'Bedrock', 'SageMaker', 'Docker', 'Kubernetes', 'Terraform', 'MLflow', 'CI/CD']],
  ['Data & Applications', ['FastAPI', 'React', 'PostgreSQL', 'MongoDB', 'OpenSearch', 'LangChain', 'Prometheus', 'Langfuse']],
]

export default function Page() {
  const [dark, setDark] = useState(true)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState('')
  const reduceMotion = useReducedMotion()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) { setFormError('Please complete the required fields.'); return }
    setFormError('')
    setSent(true)
    form.reset()
  }

  return (
    <div className={dark ? 'portfolio dark' : 'portfolio light'}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a href="#top" className="brand" aria-label="Litesh Perumalla home"><span className="brand-mark">LP</span><span className="brand-name">Litesh Perumalla</span></a>
          <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
          <div className="nav-actions"><button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button><a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a></div>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> AI automation engineer · building what&apos;s next</div>
            <h1>Turning complex AI<br /><em>into automated impact.</em></h1>
            <p className="hero-lede">I&apos;m Litesh, an AI Automation Engineer focused on production-grade LLM systems, RAG pipelines, and multi-agent workflows that eliminate manual work and make teams more effective.</p>
            <div className="hero-actions"><a className="primary-button" href="#work">View selected work <ArrowUpRight aria-hidden="true" /></a><a className="text-button" href="#contact">Start a conversation <span>↗</span></a></div>
            <div className="socials"><span>Find me online</span><a href="https://github.com/liteshperumalla" target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch aria-hidden="true" /></a><a href="https://linkedin.com/in/perumalla-litesh" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link aria-hidden="true" /></a><a href="mailto:liteshperumalla@gmail.com" aria-label="Email Litesh"><Mail aria-hidden="true" /></a></div>
          </div>
          <div className="hero-visual" aria-label="Portrait placeholder">
            <div className="visual-grid" /><div className="visual-orb orb-one" /><div className="visual-orb orb-two" />
            <div className="portrait-card"><div className="portrait-initials">LP</div><div className="portrait-caption"><span className="status-dot" /> Available for meaningful problems</div></div>
            <span className="visual-label label-top">01 / 03</span><span className="visual-label label-bottom">AI · ML · SYSTEMS</span>
          </div>
        </section>

        <section id="work" className="section-shell section-block"><div className="section-heading"><div><span className="section-index">01</span><h2>Projects</h2></div><p>AI automation systems that move ideas<br />from interesting to impactful.</p></div>
          <div className="projects-grid">{projects.map((project, index) => <motion.article key={project.title} className={`project-card ${index === 0 ? 'project-featured' : ''}`} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={reduceMotion ? {} : { y: -8 }}><div className={`project-art bg-gradient-to-br ${project.accent}`}><span className="project-number">{project.number}</span><Sparkles className="project-spark" aria-hidden="true" /><div className="art-lines" /></div><div className="project-body"><div className="project-meta"><span>{project.type}</span><span className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></motion.article>)}</div>
        </section>

        <section id="experience" className="section-shell section-block experience-section"><div className="section-heading"><div><span className="section-index">02</span><h2>Experience</h2></div><p>Learning in public.<br />Shipping with purpose.</p></div><div className="timeline">{experiences.map((item, index) => <motion.article key={item.company} className="timeline-item" initial={{ opacity: 0, x: reduceMotion ? 0 : -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.12 }}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div className="timeline-top"><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><div className="date"><span>{item.date}</span><span>{item.location}</span></div></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></motion.article>)}</div></section>

        <section id="skills" className="section-shell section-block skills-section"><div className="section-heading"><div><span className="section-index">03</span><h2>Toolkit</h2></div><p>The tools I use to turn<br />ambition into architecture.</p></div><div className="skills-grid">{skillGroups.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="skill-tags">{(skills as string[]).map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

        <section id="contact" className="contact-section"><div className="section-shell contact-grid"><div><span className="section-index">04</span><h2>Have a problem<br /><em>worth solving?</em></h2><p>Tell me what you&apos;re building, exploring, or trying to make better. I&apos;d love to hear about it.</p><a className="email-link" href="mailto:liteshperumalla@gmail.com"><Mail aria-hidden="true" /> liteshperumalla@gmail.com</a></div><form onSubmit={handleSubmit} className="contact-form" noValidate><div className="form-row"><label htmlFor="name">Name<span>*</span><input id="name" name="name" type="text" autoComplete="name" placeholder="Your name…" required /></label><label htmlFor="email">Email<span>*</span><input id="email" name="email" type="email" autoComplete="email" spellCheck={false} placeholder="you@example.com…" required /></label></div><label htmlFor="message">Message<span>*</span><textarea id="message" name="message" rows={5} placeholder="Tell me a little about the project…" required /></label><div className="form-footer"><span className="form-status" aria-live="polite">{sent ? <><Check aria-hidden="true" /> Thanks — I&apos;ll be in touch soon.</> : formError}</span><Button type="submit">Send message <Send data-icon="inline-end" aria-hidden="true" /></Button></div></form></div></section>
      </main>
      <footer className="footer section-shell"><span>© 2026 Litesh Perumalla</span><span>Designed & built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
