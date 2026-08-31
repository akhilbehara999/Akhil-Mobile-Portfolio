import { motion } from 'framer-motion';
import { ExternalLink, FileCheck } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGoogledrive } from 'react-icons/si';

const certificates = [
  { id: 'cert-1', title: 'Python for Data Science and AI', issuer: 'IBM — Coursera', date: 'March 2024' },
  { id: 'cert-2', title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI — Coursera', date: 'June 2024' },
  { id: 'cert-3', title: 'SQL for Data Analysis', issuer: 'Google — Coursera', date: 'August 2024' },
  { id: 'cert-4', title: 'Data Visualization with Tableau', issuer: 'Tableau — Coursera', date: 'November 2024' },
];

export default function CertificatesSection() {
  return (
    <motion.section
      className="section-content certificates-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-certificates"
    >
      <div className="certificate-list">
        {certificates.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={certificate.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          >
            <div className="certificate-preview">
              <FileCheck size={36} strokeWidth={1.5} aria-hidden="true" />
              <span>Certificate Preview</span>
            </div>
            <div className="certificate-details">
              <h2>{certificate.title}</h2>
              <p>{certificate.issuer}</p>
              <span>{certificate.date}</span>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="certificate-links"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.32, ease: 'easeOut' }}
      >
        <h2 className="section-content-label">VIEW ALL CERTIFICATES</h2>
        <motion.a
          className="certificate-link certificate-linkedin"
          href="https://linkedin.com/in/akhil-behara"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <span><FaLinkedinIn size={18} aria-hidden="true" />View on LinkedIn</span>
          <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
        </motion.a>
        <motion.a
          className="certificate-link certificate-drive"
          href="https://drive.google.com/drive/my-drive"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <span><SiGoogledrive size={18} aria-hidden="true" />View on Drive</span>
          <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}