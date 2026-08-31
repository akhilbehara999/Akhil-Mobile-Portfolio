import { motion } from 'framer-motion';
import {
  BarChart3,
} from 'lucide-react';
import {
  SiC,
  SiAnthropic,
  SiClaude,
  SiGit,
  SiGithub,
  SiJavascript,
  SiGooglegemini,
  SiModelcontextprotocol,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

type Skill = {
  label: string;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    label: 'LANGUAGES',
    skills: [
      { label: 'Python', icon: SiPython, color: '#3776AB' },
      { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { label: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    label: 'AI & LLMS',
    skills: [
      { label: 'Claude API', icon: SiClaude, color: '#D97757' },
      { label: 'Gemini API', icon: SiGooglegemini, color: '#4285F4' },
      { label: 'OpenAI API', icon: SiAnthropic, color: '#10A37F' },
      { label: 'MCP', icon: SiModelcontextprotocol, color: '#6B4FBB' },
      { label: 'Prompt Engineering', icon: SiClaude, color: '#D97757' },
      { label: 'Model Evaluation', icon: SiAnthropic, color: '#C15F3C' },
    ],
  },
  {
    label: 'DATA & ANALYTICS',
    skills: [
      { label: 'SQL', icon: SiMysql, color: '#4479A1' },
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { label: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { label: 'Pandas', icon: SiPandas, color: '#150458' },
      { label: 'Tableau', icon: BarChart3, color: '#E97627' },
      { label: 'EDA', icon: BarChart3, color: '#C85A10' },
      { label: 'Statistical Analysis', icon: BarChart3, color: '#AA2222' },
    ],
  },
  {
    label: 'TOOLS & AUTOMATION',
    skills: [
      { label: 'Git', icon: SiGit, color: '#F05032' },
      { label: 'GitHub', icon: SiGithub, color: '#181717' },
      { label: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { label: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
      { label: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { label: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { label: 'ETL Pipelines', icon: SiPandas, color: '#150458' },
      { label: 'Data Validation', icon: SiPostman, color: '#FF6C37' },
      { label: 'Workflow Automation', icon: SiSupabase, color: '#3ECF8E' },
      { label: 'Error Handling', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

export default function SkillsSection() {
  let skillIndex = 0;

  return (
    <motion.section
      className="section-content skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      data-testid="section-content-skills"
    >
      {skillGroups.map((group) => (
        <section className="skill-group" key={group.label}>
          <h2 className="section-content-label">{group.label}</h2>
          <div className="skill-grid">
            {group.skills.map((skill) => {
              const index = skillIndex;
              skillIndex += 1;
              const Icon = skill.icon;
              return (
                <motion.div
                  className="skill-item"
                  key={skill.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <span className="skill-icon-box">
                    <Icon size={26} color={skill.color} aria-hidden="true" />
                  </span>
                  <span>{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      ))}
    </motion.section>
  );
}