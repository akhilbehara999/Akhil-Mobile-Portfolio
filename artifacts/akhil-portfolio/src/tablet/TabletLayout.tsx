import { AnimatePresence } from 'framer-motion';
import { Fragment, useState, type ReactNode } from 'react';
import { ContactScreen } from '../components/ContactScreen';
import { SectionScreen } from '../components/SectionScreen';
import { WorkspaceScreen, type SectionId } from '../components/WorkspaceScreen';
import { TabletSideRail, type TabletNavScreen } from './TabletSideRail';

type Screen = TabletNavScreen | 'section';

type TabletLayoutProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  homeContent: (onExplore: () => void) => ReactNode;
};

export function TabletLayout({ theme, onToggleTheme, homeContent }: TabletLayoutProps) {
  const [screen, setScreen] = useState<Screen>('home');
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);

  const navigate = (nextScreen: TabletNavScreen) => {
    window.scrollTo(0, 0);
    setCurrentSection(null);
    setScreen(nextScreen);
  };

  const openSection = (sectionId: SectionId) => {
    window.scrollTo(0, 0);
    setCurrentSection(sectionId);
    setScreen('section');
  };

  return (
    <div className="tablet-experience" data-theme={theme} data-testid="tablet-experience">
      <TabletSideRail screen={screen} theme={theme} onNavigate={navigate} onToggleTheme={onToggleTheme} />
      <div className="tablet-canvas">
        <AnimatePresence mode="wait" initial={false}>
          {screen === 'home' ? (
            <Fragment key="tablet-home">{homeContent(() => navigate('workspace'))}</Fragment>
          ) : screen === 'workspace' ? (
            <WorkspaceScreen key="tablet-workspace" onCardTap={openSection} />
          ) : screen === 'section' && currentSection ? (
            <SectionScreen key={`tablet-section-${currentSection}`} sectionId={currentSection} onBack={() => navigate('workspace')} />
          ) : (
            <ContactScreen key="tablet-contact" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
