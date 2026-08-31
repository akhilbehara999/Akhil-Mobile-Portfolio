import { motion } from 'framer-motion';
import { ExternalLink, FileCheck } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGoogledrive } from 'react-icons/si';

const certificates = [
  { id: 'cert-1', title: 'Anthropic Model Context Protocol (MCP)', issuer: 'Anthropic', date: '' },
  { id: 'cert-2', title: 'Deloitte Data Analytics & Forensic Technology', issuer: 'Forage', date: '' },
  { id: 'cert-3', title: 'Tata iQ GenAI Powered Data Analytics', issuer: 'Forage', date: '' },
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
              {certificate.date ? <span>{certificate.date}</span> : null}
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
          href="https://www.linkedin.com/in/pondara-akhil-behara-016126381"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <span><FaLinkedinIn size={18} aria-hidden="true" />View on LinkedIn</span>
          <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
        </motion.a>
        <motion.a
          className="certificate-link certificate-drive"
          href="https://drive.google.com/drive/folders/1NILiLOGCmGQi88opwFHKlOdwTx4rjTDo?usp=drive_link"
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