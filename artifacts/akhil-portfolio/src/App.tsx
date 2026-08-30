import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Home as HomeIcon,
  Mail,
  Send,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Screen = 'home' | 'workspace' | 'contact';

const journeyData = [
  { label: 'Year 1', value: 60 },
  { label: 'Year 2', value: 72 },
  { label: 'Year 3', value: 85 },
  { label: 'Year 4', value: 95 },
];

const projectData = [
  { name: 'AI Analyst', value: 4 },
  { name: 'Data Agent', value: 3 },
  { name: 'FileFlow', value: 5 },
];

const skillData = [
  { name: 'Python', value: 35, color: '#AA2222' },
  { name: 'SQL', value: 25, color: '#E07020' },
  { name: 'Data', value: 20, color: '#C85A10' },
  { name: 'AI/ML', value: 12, color: '#8B1A1A' },
  { name: 'Web', value: 8, color: '#F0A060' },
];

const navItems: Array<{ id: Screen; label: string; icon: typeof HomeIcon }> = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'workspace', label: 'Workspace', icon: BriefcaseBusiness },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function ChartTooltip({
  active,
  payload,
  label,
  mode = 'line',
}: {
  active?: boolean;
  payload?: Array<{ value?: number | string; name?: string }>;
  label?: string;
  mode?: 'line' | 'pie';
}) {
  if (!active || !payload?.length) return null;
  const chartLabel = mode === 'pie' ? payload[0].name : label;
  const chartValue = mode === 'pie' ? `${payload[0].value}%` : `Progress ↑ ${payload[0].value}`;

  return (
    <div className="chart-tooltip" data-testid="chart-tooltip">
      <div className="chart-tooltip-label">{chartLabel}</div>
      <div className="chart-tooltip-value">{chartValue}</div>
    </div>
  );
}

function JourneyCard() {
  return (
    <motion.section
      className="mb-7"
      custom={0.2}
      initial="hidden"
      animate="visible"
      variants={reveal}
      data-testid="section-journey"
    >
      <div className="section-heading">
        <h2 className="section-kicker">MY JOURNEY</h2>
        <span className="section-note">momentum over time</span>
      </div>
      <div className="chart-card journey-card" data-testid="chart-journey">
        <div className="chart-fixed">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={journeyData} margin={{ top: 13, right: 10, bottom: 2, left: 0 }}>
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                interval={0}
                padding={{ left: 10, right: 10 }}
                tick={{ fill: '#9A9A9A', fontSize: 9 }}
                tickFormatter={(value: string) => value.replace('Year ', 'Y')}
              />
              <YAxis hide domain={[40, 100]} />
              <Tooltip content={<ChartTooltip mode="line" />} cursor={{ stroke: '#E8E2DC' }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#AA2222"
                strokeWidth={2.5}
                dot={{ r: 5, fill: '#AA2222', stroke: '#AA2222' }}
                activeDot={{ r: 6, fill: '#E07020', stroke: '#FFF', strokeWidth: 2 }}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="journey-stats">
          <div data-testid="stat-start">
            <span className="stat-label">Started</span>
            <span className="stat-value">60</span>
          </div>
          <div data-testid="stat-current">
            <span className="stat-label">Current</span>
            <span className="stat-value">95</span>
          </div>
          <div data-testid="stat-growth">
            <span className="stat-label">Growth</span>
            <span className="stat-value">+58%</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProjectsCard() {
  return (
    <div className="chart-card small-chart-card shimmer" data-testid="chart-projects">
      <div className="flex items-center justify-between gap-2">
        <h3 className="small-chart-title">PROJECTS</h3>
        <BarChart3 size={14} strokeWidth={1.8} color="#AA2222" aria-hidden="true" />
      </div>
      <div className="bar-fixed">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={projectData} layout="vertical" margin={{ top: 4, right: 6, bottom: 8, left: 4 }}>
            <XAxis
              type="number"
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9A9A9A', fontSize: 9 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={65}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#5C5C5C', fontSize: 9 }}
            />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: '#F8F5F2' }} />
            <Bar dataKey="value" fill="#AA2222" radius={[0, 5, 5, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SkillsCard() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skillData)[number] | null>(null);

  useEffect(() => {
    if (!selectedSkill) return;

    const timeoutId = window.setTimeout(() => {
      setSelectedSkill(null);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [selectedSkill]);

  return (
    <div className="chart-card small-chart-card" data-testid="chart-skills">
      <div className="flex items-center justify-between gap-2">
        <h3 className="small-chart-title">SKILLS</h3>
        <Code2 size={14} strokeWidth={1.8} color="#E07020" aria-hidden="true" />
      </div>
      <div className="pie-fixed">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={skillData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="47%"
              outerRadius={50}
              isAnimationActive
              stroke="none"
              onClick={(_, index) => setSelectedSkill(skillData[index] ?? null)}
            >
              {skillData.map((skill) => (
                <Cell key={skill.name} fill={skill.color} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip mode="pie" />} />
          </PieChart>
        </ResponsiveContainer>
        <AnimatePresence>
          {selectedSkill ? (
            <motion.div
              className="skill-tap"
              initial={{ opacity: 0, scale: 0.82, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              role="status"
              aria-live="polite"
              data-testid="selected-skill"
            >
              <span className="skill-tap-name">{selectedSkill.name}</span>
              <span className="skill-tap-value">{selectedSkill.value}%</span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="legend-list">
        {skillData.map((skill) => (
          <div className="legend-item" key={skill.name} data-testid={`legend-skill-${skill.name.toLowerCase().replace('/', '-')}`}>
            <span className={`legend-dot legend-dot-${skill.name.toLowerCase().replace('/', '-')}`} aria-hidden="true" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeScreen({ onExplore }: { onExplore: () => void }) {
  return (
    <motion.main
      key="home"
      className="content-shell"
      initial="hidden"
      animate="visible"
      variants={reveal}
      data-testid="screen-home"
    >
      <motion.header className="top-bar" custom={0.05} variants={reveal}>
        <div className="brand-mark" aria-label="Akhil monogram">A</div>
        <div className="status-pill" data-testid="status-available">
          <span className="status-dot" aria-hidden="true" />
          Open to the right problem
        </div>
      </motion.header>

      <motion.section className="hero-panel shimmer" custom={0.1} variants={reveal} data-testid="hero-intro">
        <div className="eyebrow">HELLO, USER</div>
        <h1 className="hero-title">
          I&apos;m <span>Akhil</span>
        </h1>
        <div className="hero-role">Data · AI · Engineering</div>
        <p className="hero-copy">
          Turning data into decisions, and ideas into working systems.
        </p>
      </motion.section>

      <JourneyCard />

      <motion.section
        className="mb-1"
        custom={0.3}
        initial="hidden"
        animate="visible"
        variants={reveal}
        data-testid="section-snapshot"
      >
        <div className="section-heading">
          <h2 className="section-kicker">SKILLS &amp; PROJECTS</h2>
          <span className="section-note">the current stack</span>
        </div>
        <div className="chart-grid">
          <ProjectsCard />
          <SkillsCard />
        </div>
      </motion.section>

      <motion.button
        type="button"
        className="cta-button"
        onClick={onExplore}
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={reveal}
        data-testid="button-explore-projects"
      >
        <span>Explore projects</span>
        <span className="cta-arrow" aria-hidden="true">
          <ArrowRight size={16} strokeWidth={2.2} />
        </span>
      </motion.button>
    </motion.main>
  );
}

function ComingSoonScreen({ screen, onBack }: { screen: Exclude<Screen, 'home'>; onBack: () => void }) {
  const isWorkspace = screen === 'workspace';
  return (
    <motion.main
      key={screen}
      className="content-shell flex min-h-[100dvh] flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      data-testid={`screen-${screen}`}
    >
      <header className="top-bar">
        <button
          type="button"
          className="brand-mark"
          onClick={onBack}
          aria-label="Back to home"
          data-testid="button-back-brand"
        >
          A
        </button>
        <div className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          {isWorkspace ? 'Workspace' : 'Say hello'}
        </div>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center pb-28 text-center">
        <motion.div
          className="coming-symbol"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          aria-hidden="true"
        >
          {isWorkspace ? <BriefcaseBusiness size={25} strokeWidth={1.7} /> : <Send size={24} strokeWidth={1.7} />}
        </motion.div>
        <p className="eyebrow">In progress</p>
        <h1 className="coming-title">Coming Soon</h1>
        <p className="coming-copy">This section is being crafted with care.</p>
        <div className="coming-rule" aria-hidden="true" />
        <button
          type="button"
          onClick={onBack}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E8E2DC] bg-white px-4 py-2.5 font-display text-xs font-medium text-[#5C5C5C] transition-colors hover:border-[#AA2222] hover:text-[#AA2222]"
          data-testid="button-back-home"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to home
        </button>
      </div>
    </motion.main>
  );
}

function MobileNav({ screen, onNavigate }: { screen: Screen; onNavigate: (screen: Screen) => void }) {
  return (
    <nav className="bottom-nav phone-only" aria-label="Primary navigation" data-testid="navigation-bottom">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          type="button"
          key={id}
          className={`nav-item ${screen === id ? 'nav-item-active' : ''}`}
          onClick={() => onNavigate(id)}
          aria-current={screen === id ? 'page' : undefined}
          data-testid={`button-nav-${id}`}
        >
          <Icon className="nav-icon" size={19} strokeWidth={screen === id ? 2.2 : 1.7} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function DesktopComingSoon() {
  return (
    <main className="desktop-only coming-screen" data-testid="desktop-coming-soon">
      <div className="coming-inner">
        <div className="coming-symbol" aria-hidden="true">A</div>
        <h1 className="coming-title">Akhil</h1>
        <p className="coming-copy">Full mobile experience coming to tablet &amp; desktop soon.</p>
        <div className="coming-rule" aria-hidden="true" />
      </div>
    </main>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  return isDesktop;
}

function MobileExperience() {
  const [screen, setScreen] = useState<Screen>('home');
  const navigate = (nextScreen: Screen) => {
    window.scrollTo(0, 0);
    setScreen(nextScreen);
  };

  return (
    <div className="phone-only phone-canvas" data-testid="mobile-experience">
      <AnimatePresence mode="wait" initial={false}>
        {screen === 'home' ? (
          <HomeScreen key="home" onExplore={() => navigate('workspace')} />
        ) : (
          <ComingSoonScreen key={screen} screen={screen} onBack={() => navigate('home')} />
        )}
      </AnimatePresence>
      <MobileNav screen={screen} onNavigate={navigate} />
    </div>
  );
}

function App() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? <DesktopComingSoon /> : <MobileExperience />}
    </>
  );
}

export default App;