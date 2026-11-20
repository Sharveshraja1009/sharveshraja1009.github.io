import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '@/data/profile';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Fields = { name: string; email: string; message: string; website: string };
type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

/** The email set as display type, with the existing EmailJS form kept as a second way in. */
export default function Contact() {
  const [form, setForm] = useState<Fields>({ name: '', email: '', message: '', website: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const [at, domain] = profile.email.split('@');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const formEnabled = Boolean(serviceId && templateId && publicKey);

  function validate(): Errors {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your name.';
    if (!emailRe.test(form.email.trim())) e.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) e.message = 'Please write at least 10 characters.';
    return e;
  }

  async function submit(ev: FormEvent) {
    ev.preventDefault();
    if (form.website.trim()) return; // honeypot
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: form.name.trim(), from_email: form.email.trim(), message: form.message.trim() },
        { publicKey }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '', website: '' });
    } catch {
      setStatus('failed');
    }
  }

  const change = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    if (errors[ev.target.name as keyof Errors]) setErrors({ ...errors, [ev.target.name]: undefined });
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="rise">Hiring, or need a site or app built? Write to me.</h2>

      <div className="contact-body">
        <p className="rise" style={{ ['--i' as string]: 1 }}>
          I'm open to full-stack and front-end roles, and to freelance web and app work. Email reaches me directly.
        </p>
        {formEnabled && (
          <form className="contact-form rise" onSubmit={submit} noValidate style={{ ['--i' as string]: 2 }}>
            <label>
              Your name
              <input name="name" autoComplete="name" value={form.name} onChange={change} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
              {errors.name && <span id="e-name" className="err">{errors.name}</span>}
            </label>
            <label>
              Your email
              <input name="email" type="email" autoComplete="email" value={form.email} onChange={change} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
              {errors.email && <span id="e-email" className="err">{errors.email}</span>}
            </label>
            <label>
              Message
              <textarea name="message" rows={4} value={form.message} onChange={change} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-msg' : undefined} />
              {errors.message && <span id="e-msg" className="err">{errors.message}</span>}
            </label>
            <input className="hp" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={change} aria-hidden="true" />
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className="form-status" role="status">
              {status === 'sent' && 'Thanks, your message was sent.'}
              {status === 'failed' && `That didn't go through. Please email ${profile.email} directly.`}
            </p>
          </form>
        )}
      </div>

      <a className="email rise" href={`mailto:${profile.email}`}>
        {at}@<wbr />
        {domain}
      </a>

      <div className="contact-foot">
        <span>{profile.city}</span>
        <nav aria-label="Profiles">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </nav>
      </div>
    </section>
  );
}
