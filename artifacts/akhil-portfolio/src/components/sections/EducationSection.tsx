import { motion } from 'framer-motion';

const educationEntries = [
  {
    year: '2023 – 2027',
    institution: 'Chaitanya Engineering College',
    degree: 'B.Tech — Computer Science (AI & Data Science)',
    grade: '',
    note: 'Relevant coursework: Data Structures, DBMS, Statistics, Machine Learning',
  },
];

export default function EducationSection() {
  return (
    <motion.section
      className="section-content education-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-education"
    >
      <div className="education-timeline">
        <motion.span
          className="education-timeline-line"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          aria-hidden="true"
        />
        {educationEntries.map((entry, index) => (
          <motion.article
            className="education-entry"
            key={entry.year}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.15, ease: 'easeOut' }}
          >
            <span className="education-dot" aria-hidden="true" />
            <div className="education-card">
              <div className="education-meta">
                <span className="education-year">{entry.year}</span>
                <span className="education-institution">{entry.institution}</span>
              </div>
              <h2>{entry.degree}</h2>
              {entry.grade ? <p className="education-grade">{entry.grade}</p> : null}
              {entry.note ? <p className="education-note">{entry.note}</p> : null}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}