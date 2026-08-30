import { motion } from 'framer-motion';
import { ArrowLeft, Construction } from 'lucide-react';
import { workspaceCards, type SectionId } from './WorkspaceScreen';

type SectionScreenProps = {
  sectionId: SectionId;
  onBack: () => void;
};

export function SectionScreen({ sectionId, onBack }: SectionScreenProps) {
  const section = workspaceCards.find((card) => card.id === sectionId) ?? workspaceCards[0];
  const Icon = section.icon;

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

      <motion.section
        className="in-progress-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        aria-label={`${section.title} is in progress`}
      >
        <Construction size={32} strokeWidth={1.6} aria-hidden="true" />
        <h2>Being crafted</h2>
        <p>This section is being designed with care. Check back soon.</p>
        <span className="progress-shimmer" aria-hidden="true" />
      </motion.section>

      <motion.button
        type="button"
        className="section-back section-back-bottom"
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.34 }}
      >
        <ArrowLeft size={15} strokeWidth={2} />
        Back to Workspace
      </motion.button>
    </motion.main>
  );
}