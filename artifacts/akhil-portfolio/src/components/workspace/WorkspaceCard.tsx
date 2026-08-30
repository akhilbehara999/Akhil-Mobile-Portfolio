import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export type WorkspaceCardData = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
};

type WorkspaceCardProps = {
  card: WorkspaceCardData;
  index: number;
  onTap: (sectionId: string) => void;
};

export function WorkspaceCard({ card, index, onTap }: WorkspaceCardProps) {
  const Icon = card.icon;

  return (
    <motion.button
      type="button"
      className="workspace-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, boxShadow: '0 7px 18px rgba(91, 43, 25, 0.11)' }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onTap(card.id)}
      aria-label={`Explore ${card.title}`}
      data-testid={`workspace-card-${card.id}`}
    >
      <span className="workspace-card-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <span className="workspace-card-title">{card.title}</span>
      <span className="workspace-card-description">{card.description}</span>
      <span className="workspace-card-cta">Explore <span aria-hidden="true">→</span></span>
    </motion.button>
  );
}