import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { ContactForm } from './contact/ContactForm';
import { SocialOrbit } from './contact/SocialOrbit';

export function ContactScreen() {
  return (
    <motion.main
      className="contact-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      data-testid="screen-contact"
    >
      <header className="contact-header">
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
            <Mail size={20} strokeWidth={1.8} />
          </motion.span>
          <h1>Contact</h1>
        </motion.div>
        <motion.p
          className="workspace-description"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16, ease: 'easeOut' }}
        >
          Let&apos;s connect — I&apos;d love to hear from you.
          <br />
          Find me on socials or drop a message below.
        </motion.p>
        <motion.div
          className="workspace-divider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.24 }}
          aria-hidden="true"
        />
      </header>

      <SocialOrbit />
      <ContactForm />

      <footer className="contact-footer">
        <p>Built by Akhil · 2024–2025</p>
        <p>Andhra Pradesh, India</p>
      </footer>
    </motion.main>
  );
}