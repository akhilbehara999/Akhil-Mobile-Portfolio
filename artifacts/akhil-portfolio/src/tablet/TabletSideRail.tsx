import { BriefcaseBusiness, Home, Mail, Moon, Sun } from 'lucide-react';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

export type TabletNavScreen = 'home' | 'workspace' | 'contact';

type TabletSideRailProps = {
  screen: TabletNavScreen | 'section';
  theme: 'light' | 'dark';
  onNavigate: (screen: TabletNavScreen) => void;
  onToggleTheme: () => void;
};

const items: Array<{ id: TabletNavScreen; label: string; icon: ComponentType<LucideProps> }> = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'workspace', label: 'Workspace', icon: BriefcaseBusiness },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function TabletSideRail({ screen, theme, onNavigate, onToggleTheme }: TabletSideRailProps) {
  return (
    <aside className="tablet-rail" aria-label="Primary navigation" data-testid="navigation-tablet-rail">
      <div className="tablet-rail-brand" aria-label="Akhil monogram">A</div>
      <nav className="tablet-rail-nav">
        {items.map(({ id, label, icon: Icon }) => {
          const active = screen === id || (screen === 'section' && id === 'workspace');
          return (
            <button
              key={id}
              type="button"
              className={`tablet-rail-item ${active ? 'tablet-rail-item-active' : ''}`}
              onClick={() => onNavigate(id)}
              aria-current={active ? 'page' : undefined}
              data-testid={`button-tablet-nav-${id}`}
            >
              <Icon size={22} strokeWidth={active ? 2.2 : 1.7} aria-hidden="true" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
      <button
        type="button"
        className="tablet-theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        aria-pressed={theme === 'dark'}
        data-testid="button-tablet-theme-toggle"
      >
        {theme === 'light' ? <Moon size={20} strokeWidth={1.8} aria-hidden="true" /> : <Sun size={20} strokeWidth={1.8} aria-hidden="true" />}
        <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
      </button>
    </aside>
  );
}
