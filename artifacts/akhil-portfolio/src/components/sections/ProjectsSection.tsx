import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

type ProjectStatus = 'Completed' | 'In Progress';

type ProjectData = {
  id: string;
  title: string;
  status: ProjectStatus;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  sourceCode: string;
  demo: string;
};

const projects: ProjectData[] = [
  {
    id: 'data-agent',
    title: 'Data Agent',
    status: 'Completed',
    shortDesc: 'An AI-powered data analysis system for dataset ingestion, transformation, and automated insight generation.',
    longDesc: 'Built an AI-powered data analysis system for dataset ingestion, transformation, and automated insight generation. Developed evaluation workflows across 50+ datasets, reducing manual analysis time by 3+ hours.',
    tech: ['Python', 'Claude API', 'SQL'],
    sourceCode: 'https://github.com/akhilbehara999/data-agent',
    demo: '',
  },
  {
    id: 'fileflow',
    title: 'FileFlow',
    status: 'Completed',
    shortDesc: 'A privacy-first file processing platform supporting 20+ file formats across images, documents, audio, and video.',
    longDesc: 'Built a privacy-first file processing platform using Next.js, TypeScript, and FFmpeg WASM. Implemented OCR, batch processing, validation, and ZIP export workflows, enabling 100% client-side file conversion without server-side uploads.',
    tech: ['Next.js', 'TypeScript', 'FFmpeg WASM', 'Automation'],
    sourceCode: 'https://github.com/akhilbehara999/FileFlow',
    demo: '',
  },
  {
    id: 'thinkring',
    title: 'ThinkRing',
    status: 'Completed',
    shortDesc: 'A campus management platform with five integrated student services built with JavaScript and Supabase.',
    longDesc: 'Built a campus management platform with 5+ integrated student services using JavaScript and Supabase. Implemented secure authentication, role-based access control, and scalable cloud-backed architecture.',
    tech: ['JavaScript', 'Supabase', 'PostgreSQL', 'MongoDB'],
    sourceCode: 'https://github.com/akhilbehara999/thinkring-project-with-supabase',
    demo: '',
  },
  {
    id: 'data-jobs-salary-analysis',
    title: 'Data Jobs Salary Analysis',
    status: 'Completed',
    shortDesc: 'An analysis of 50K+ job postings to identify salary trends, in-demand skills, and hiring patterns.',
    longDesc: 'Analyzed 50K+ job postings to identify salary trends, in-demand skills, and hiring patterns within the data industry.',
    tech: ['Python', 'SQL', 'Tableau'],
    sourceCode: 'https://github.com/akhilbehara999/data-jobs-salary-analysis',
    demo: 'https://data-jobs-salary-analysis-zrjymrqkcvgo53tpxwq9uh.streamlit.app/',
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`project-status project-status-${status === 'Completed' ? 'completed' : 'progress'}`}>{status}</span>;
}

function ProjectList({ onSelect }: { onSelect: (project: ProjectData) => void }) {
  return (
    <motion.div className="project-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {projects.map((project, index) => (
        <motion.article
          className="project-card"
          key={project.id}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(project)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onSelect(project);
            }
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          whileTap={{ scale: 0.98 }}
          data-testid={`project-card-${project.id}`}
        >
          <div className="project-card-title-row">
            <h2>{project.title}</h2>
            <StatusBadge status={project.status} />
          </div>
          <p className="project-short-description">{project.shortDesc}</p>
          <div className="project-tags">
            {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="project-card-footer">
            <span>View Details <span aria-hidden="true">→</span></span>
            <span className="project-card-links">
              {project.sourceCode ? (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} source code`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <SiGithub size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
                </a>
              ) : null}
            </span>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

function ProjectDetail({ project, onBack }: { project: ProjectData; onBack: () => void }) {
  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button type="button" className="project-back" onClick={onBack}>
        ← Projects
      </button>
      <motion.div
        className="project-detail-heading"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2>{project.title}</h2>
        <StatusBadge status={project.status} />
      </motion.div>
      <motion.div
        className="project-tags project-detail-tags"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
      >
        {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
      </motion.div>
      <div className="project-detail-divider" />
      <motion.div
        className="project-detail-copy"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' }}
      >
        <h3>ABOUT THIS PROJECT</h3>
        <p>{project.longDesc}</p>
      </motion.div>
      <motion.div
        className="project-detail-links"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.24, ease: 'easeOut' }}
      >
        {project.sourceCode ? (
          <motion.a
            className="project-link-button project-link-source"
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.97 }}
          >
            <span><SiGithub size={18} aria-hidden="true" />Source Code</span>
            <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
          </motion.a>
        ) : null}
        {project.demo ? (
          <motion.a
            className="project-link-button project-link-demo"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.97 }}
          >
            <span><Play size={18} strokeWidth={1.8} aria-hidden="true" />Live Demo</span>
            <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
          </motion.a>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <motion.section
      className="section-content projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-projects"
    >
      <AnimatePresence mode="wait" initial={false}>
        {selectedProject ? (
          <ProjectDetail key={selectedProject.id} project={selectedProject} onBack={() => setSelectedProject(null)} />
        ) : (
          <ProjectList key="project-list" onSelect={setSelectedProject} />
        )}
      </AnimatePresence>
    </motion.section>
  );
}