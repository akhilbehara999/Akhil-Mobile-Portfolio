import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const emptyValues: FormValues = { name: '', email: '', message: '' };

function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <motion.p
      id={id}
      className="contact-field-error"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      role="alert"
    >
      {children}
    </motion.p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const sendTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (sendTimeout.current !== null) window.clearTimeout(sendTimeout.current);
    };
  }, []);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email';
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Please enter a message';
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Message too short';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    sendTimeout.current = window.setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const resetForm = () => {
    setValues(emptyValues);
    setErrors({});
    setStatus('idle');
  };

  return (
    <motion.section
      className="contact-form-section"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby="send-message-title"
    >
      <h2 id="send-message-title" className="contact-section-label">SEND A MESSAGE</h2>
      <motion.div
        className="contact-form-card"
        layout
        transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === 'success' ? (
            <motion.div
              key="success"
              className="contact-success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <CheckCircle2 size={48} strokeWidth={1.6} aria-hidden="true" />
              </motion.div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              <button type="button" className="contact-reset-button" onClick={resetForm}>
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="contact-field">
                <input
                  id="contact-name"
                  aria-label="Your name"
                  type="text"
                  placeholder="Your name"
                  value={values.name}
                  onChange={(event) => updateValue('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                <AnimatePresence initial={false}>
                  {errors.name ? <FieldError key="name-error" id="contact-name-error">{errors.name}</FieldError> : null}
                </AnimatePresence>
              </div>
              <div className="contact-field">
                <input
                  id="contact-email"
                  aria-label="Your email"
                  type="email"
                  placeholder="your@email.com"
                  value={values.email}
                  onChange={(event) => updateValue('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                <AnimatePresence initial={false}>
                  {errors.email ? <FieldError key="email-error" id="contact-email-error">{errors.email}</FieldError> : null}
                </AnimatePresence>
              </div>
              <div className="contact-field">
                <textarea
                  id="contact-message"
                  aria-label="Your message"
                  placeholder="What's on your mind..."
                  value={values.message}
                  onChange={(event) => updateValue('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                <AnimatePresence initial={false}>
                  {errors.message ? <FieldError key="message-error" id="contact-message-error">{errors.message}</FieldError> : null}
                </AnimatePresence>
              </div>
              <motion.button
                type="submit"
                className="contact-send-button"
                whileTap={status === 'idle' ? { scale: 0.97 } : undefined}
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                {status === 'sending' ? (
                  <Loader2 className="contact-spinner" size={18} strokeWidth={2} aria-label="Sending" />
                ) : (
                  <Send size={18} strokeWidth={2} aria-hidden="true" />
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}