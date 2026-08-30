import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code2,
  FolderOpen,
  GraduationCap,
  LayoutGrid,
  User,
} from 'lucide-react';
import { WorkspaceCard, type WorkspaceCardData } from './workspace/WorkspaceCard';

export type SectionId = 'about' | 'skills' | 'education' | 'projects' | 'experience' | 'certificates';

export const workspaceCards: Array<WorkspaceCardData & { id: SectionId }> = [
  {
    id: 'about',
    title: 'About',
    icon: User,
    description: 'Who I am, what drives me, and the story behind the work.',
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Code2,
    description: 'Languages, tools, and technologies I work with.',
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: "My academic background and what I've studied.",
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: FolderOpen,
    description: "Real things I've built — from idea to working system.",
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    description: 'Work, internships, and hands-on learning outside class.',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: Award,
    description: 'Courses completed and credentials earned.',
  },
];

type WorkspaceScreenProps = {
  onCardTap: (sectionId: SectionId) => void;
};

export function WorkspaceScreen({ onCardTap }: WorkspaceScreenProps) {
  return (
    <motion.main
      className="workspace-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      data-testid="screen-workspace"
    >
      <header className="workspace-header">
        <motion.div
          className="workspace-heading-row"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
        >
          <motion.span
            className="workspace-heading-icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            aria-hidden="true"
          >
            <LayoutGrid size={20} strokeWidth={1.8} />
          </motion.span>
          <h1>Workspace</h1>
        </motion.div>
        <motion.p
          className="workspace-description"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16, ease: 'easeOut' }}
        >
          Everything I&apos;ve built, learned, and worked on.
          <br />
          Tap any section to explore in detail.
        </motion.p>
        <motion.div
          className="workspace-divider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.24 }}
          aria-hidden="true"
        />
      </header>

      <section className="workspace-grid" aria-label="Workspace sections">
        {workspaceCards.map((card, index) => (
          <WorkspaceCard key={card.id} card={card} index={index} onTap={() => onCardTap(card.id)} />
        ))}
      </section>
    </motion.main>
  );
}