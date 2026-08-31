import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'TechStart Solutions',
    role: 'Data Analyst Intern',
    location: 'Remote · Internship',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Analyzed large datasets using Python and Pandas to identify business trends.',
      'Built interactive dashboards in Tableau for weekly stakeholder reviews.',
      'Automated data cleaning pipelines reducing manual effort by 60%.',
      'Collaborated with senior analysts to deliver monthly performance reports.',
    ],
    skills: ['Python', 'Pandas', 'Tableau', 'SQL'],
  },
  {
    company: 'College Innovation Lab',
    role: 'AI Project Lead',
    location: 'Visakhapatnam, AP · Academic',
    date: 'Jan 2025 – May 2025',
    bullets: [
      'Led a 3-member team to build an AI-powered file management system.',
      'Designed the system architecture and supervised weekly sprint reviews.',
      'Presented project outcomes to faculty and industry mentors.',
    ],
    skills: ['Python', 'FastAPI', 'SQLite', 'Team Lead'],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      className="section-content experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-experience"
    >
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <motion.article
            className="experience-card"
            key={experience.company}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
          >
            <motion.span
              className="experience-accent"
              initial={{ height: 0 }}
              animate={{ height: 'calc(100% - 32px)' }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
              aria-hidden="true"
            />
            <div className="experience-heading-row">
              <h2>{experience.company}</h2>
              <span>{experience.date}</span>
            </div>
            <p className="experience-role">{experience.role}</p>
            <p className="experience-location">{experience.location}</p>
            <div className="experience-divider" />
            <h3>KEY RESPONSIBILITIES</h3>
            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>
                  <span aria-hidden="true" />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
            <div className="project-tags experience-tags">
              {experience.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}