import { motion } from 'framer-motion';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/akhilbehara999',
    icon: SiGithub,
    float: [0, -10, 0],
    duration: 3.2,
    delay: 0,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/akhil-behara',
    icon: FaLinkedinIn,
    float: [0, -14, 0],
    duration: 2.8,
    delay: 0.4,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/akhil_behara',
    icon: SiInstagram,
    float: [0, -8, 0],
    duration: 3.6,
    delay: 0.8,
  },
];

export function SocialOrbit() {
  return (
    <motion.section
      className="contact-social"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby="social-links-title"
    >
      <h2 id="social-links-title" className="contact-section-label">SOCIAL LINKS</h2>
      <div className="social-orbit-card">
        <svg className="social-wave-lines" viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 70 73 Q 112 22 160 43" />
          <path d="M 160 43 Q 210 22 260 59" />
        </svg>
        {socialLinks.map(({ id, label, href, icon: Icon, float, duration, delay }) => (
          <motion.div
            key={id}
            className={`social-node social-node-${id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.38 + delay, ease: 'easeOut' }}
          >
            <motion.a
              className="social-link"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Akhil's ${label} profile`}
              animate={{ y: float }}
              transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
              whileTap={{ scale: 0.92 }}
            >
              <span className="social-bubble">
                <Icon size={28} aria-hidden="true" />
              </span>
              <span className="social-name">{label}</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}