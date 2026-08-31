import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { ComponentType } from 'react';
import { workspaceCards, type SectionId } from './WorkspaceScreen';
import AboutSection from './sections/AboutSection';
import CertificatesSection from './sections/CertificatesSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

type SectionScreenProps = {
  sectionId: SectionId;
  onBack: () => void;
};

const sectionMap = {
  about: AboutSection,
  skills: SkillsSection,
  education: EducationSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  certificates: CertificatesSection,
} satisfies Record<SectionId, ComponentType>;

export function SectionScreen({ sectionId, onBack }: SectionScreenProps) {
  const section = workspaceCards.find((card) => card.id === sectionId) ?? workspaceCards[0];
  const Icon = section.icon;
  const SectionContent = sectionMap[sectionId];

  return (
    <motion.main
      className="section-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      data-testid={`screen-section-${section.id}`}
    >
      <motion.button
        type="button"
        className="section-back"
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        data-testid="button-back-workspace"
      >
        <ArrowLeft size={15} strokeWidth={2} />
        Workspace
      </motion.button>

      <motion.header
        className="section-header"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
      >
        <span className="workspace-heading-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <h1>{section.title}</h1>
      </motion.header>

      <motion.div
        className="workspace-divider section-divider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.16 }}
        aria-hidden="true"
      />

      <AnimatePresence mode="wait" initial={false}>
        <SectionContent key={sectionId} />
      </AnimatePresence>
    </motion.main>
  );
}