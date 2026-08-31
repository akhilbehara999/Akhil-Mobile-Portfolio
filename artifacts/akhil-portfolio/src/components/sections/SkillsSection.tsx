import { motion } from 'framer-motion';
import {
  BarChart3,
} from 'lucide-react';
import {
  SiC,
  SiCss,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
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
      { label: 'SQL', icon: SiMysql, color: '#4479A1' },
      { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { label: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { label: 'CSS', icon: SiCss, color: '#1572B6' },
      { label: 'Java', icon: SiOpenjdk, color: '#ED8B00' },
      { label: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    label: 'TOOLS',
    skills: [
      { label: 'Git', icon: SiGit, color: '#F05032' },
      { label: 'GitHub', icon: SiGithub, color: '#181717' },
      { label: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { label: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { label: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      { label: 'Pandas', icon: SiPandas, color: '#150458' },
      { label: 'NumPy', icon: SiNumpy, color: '#013243' },
      { label: 'Tableau', icon: BarChart3, color: '#E97627' },
    ],
  },
  {
    label: 'FRAMEWORKS',
    skills: [
      { label: 'React', icon: SiReact, color: '#61DAFB' },
      { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { label: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { label: 'Flask', icon: SiFlask, color: '#000000' },
      { label: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { label: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { label: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
      { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
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