import { motion } from 'framer-motion';

const stats = [
  { number: '6+', label: 'Projects' },
  { number: '3', label: 'Semesters' },
  { number: '4+', label: 'Certificates' },
];

const paragraphs = [
  {
    label: 'WHO I AM',
    text: "I'm Akhil Behara, a Computer Science student specializing in AI & Data Science at Chaitanya Engineering College, Andhra Pradesh. I'm passionate about turning raw data into meaningful insights and building intelligent systems that solve real problems.",
  },
  {
    label: "WHAT I'VE DONE",
    text: "Over the past few semesters, I've built projects spanning data analysis, AI agents, and full-stack tools. From building intelligent file systems to data-driven dashboards, I focus on work that is both technically sound and practically useful.",
  },
  {
    label: 'WHY HIRE ME',
    text: "I bring a builder's mindset to every problem — I don't just study concepts, I apply them. I'm a fast learner, comfortable with ambiguity, and I take ownership of what I build from idea to deployment. If you need someone who ships, I'm your person.",
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
        <div className="about-avatar" aria-label="Akhil Behara initials">AB</div>
        <h2>Akhil Behara</h2>
        <p>CS Student · Data &amp; AI</p>
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