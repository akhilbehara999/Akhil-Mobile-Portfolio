import { AnimatePresence } from 'framer-motion';
import { Fragment, useState, type ReactNode } from 'react';
import { ContactScreen } from '../components/ContactScreen';
import { SectionScreen } from '../components/SectionScreen';
import { WorkspaceScreen, type SectionId } from '../components/WorkspaceScreen';
import { TabletSideRail, type TabletNavScreen } from '../tablet/TabletSideRail';

type Screen = TabletNavScreen | 'section';

type DesktopLayoutProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  homeContent: (onExplore: () => void) => ReactNode;
};

export function DesktopLayout({ theme, onToggleTheme, homeContent }: DesktopLayoutProps) {
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
    <div className="desktop-experience" data-theme={theme} data-testid="desktop-experience">
      <div className="desktop-app-body">
        <TabletSideRail screen={screen} theme={theme} onNavigate={navigate} onToggleTheme={onToggleTheme} desktop />
        <div className="desktop-canvas">
          <AnimatePresence mode="wait" initial={false}>
            {screen === 'home' ? (
              <Fragment key="desktop-home">{homeContent(() => navigate('workspace'))}</Fragment>
            ) : screen === 'workspace' ? (
              <WorkspaceScreen key="desktop-workspace" onCardTap={openSection} />
            ) : screen === 'section' && currentSection ? (
              <SectionScreen key={`desktop-section-${currentSection}`} sectionId={currentSection} onBack={() => navigate('workspace')} />
            ) : (
              <ContactScreen key="desktop-contact" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
  
