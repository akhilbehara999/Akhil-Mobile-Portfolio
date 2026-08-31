import { motion } from 'framer-motion';

const stats = [
  { number: '4', label: 'Projects' },
  { number: '1', label: 'Degree' },
  { number: '3', label: 'Certifications' },
];

const paragraphs = [
  {
    label: 'WHO I AM',
    text: 'I am Pondara Akhil Behara, a Computer Science (AI & Data Science) student at Chaitanya Engineering College. I build AI-powered applications, workflow automation systems, and data analytics solutions.',
  },
  {
    label: 'WHAT I BUILD',
    text: 'My work includes Data Agent for automated insight generation, FileFlow for privacy-first file processing, ThinkRing for campus services, and data analysis projects built with Python, SQL, Tableau, and Supabase.',
  },
  {
    label: 'WHAT I CARE ABOUT',
    text: 'I am interested in AI evaluation, system testing, data validation, and scalable software development — especially work that turns complex data and AI systems into reliable, useful products.',
  },
];

export default function AboutSection() {
  return (
    <motion.section
      className="section-content about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-about"
    >
      <motion.div
        className="about-identity"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="about-avatar" aria-label="Pondara Akhil Behara initials">AB</div>
        <h2>Pondara Akhil Behara</h2>
        <p>CS Student · AI &amp; Data Science</p>
        <span className="about-divider" aria-hidden="true" />
      </motion.div>

      <div className="about-stats" aria-label="Portfolio statistics">
        {stats.map((stat, index) => (
          <motion.div
            className="about-stat"
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
          >
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="about-copy">
        {paragraphs.map((paragraph, index) => (
          <motion.article
            key={paragraph.label}
            className="about-paragraph"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.32 + index * 0.08, ease: 'easeOut' }}
          >
            <h3>{paragraph.label}</h3>
            <p>{paragraph.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}