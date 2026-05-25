import { useState } from 'react';
import { Linkedin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactProps {
  isDark: boolean;
}

const EMAIL = 'djibrilcheikhsall@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com';

export default function Contact({ isDark }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    const { error } = await supabase.from('contact_messages').insert([
      { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
    ]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputClass = isDark ? 'input-glass-dark' : 'input-glass-light';
  const baseInput = `w-full rounded-xl px-4 py-3 text-sm ${inputClass}`;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-xl mx-auto px-6 text-center">
        {/* Header */}
        <span
          className={`font-mono text-xs tracking-widest uppercase ${
            isDark ? 'text-cyan-400/60' : 'text-cyan-600/60'
          }`}
        >
          Contact
        </span>
        <h2
          className={`mt-2 text-3xl md:text-4xl font-medium tracking-tight mb-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Travaillons ensemble.
        </h2>
        <p className={`text-sm mb-10 ${isDark ? 'text-white/45' : 'text-gray-400'}`}>
          Disponible pour des stages, alternances ou projets freelance.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div
            className={`rounded-2xl p-10 flex flex-col items-center gap-4 ${
              isDark ? 'glass-card-dark' : 'glass-card-light'
            }`}
          >
            <CheckCircle size={40} className="text-emerald-400" />
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Message envoyé !
            </p>
            <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
              Je vous répondrai dans les meilleurs délais.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl p-8 text-left ${
              isDark ? 'glass-card-dark' : 'glass-card-light'
            }`}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-white/40' : 'text-gray-400'
                  }`}
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={baseInput}
                  required
                />
              </div>
              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-white/40' : 'text-gray-400'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={baseInput}
                  required
                />
              </div>
              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-white/40' : 'text-gray-400'
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Parlez-moi de votre projet..."
                  rows={5}
                  className={`${baseInput} resize-none`}
                  required
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-[#050a10] bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                style={
                  status !== 'loading'
                    ? { boxShadow: '0 0 16px rgba(34, 211, 238, 0.25)' }
                    : undefined
                }
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#050a10]/30 border-t-[#050a10] rounded-full animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Envoyer le message
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Links */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className={`text-sm transition-colors ${
              isDark
                ? 'text-white/40 hover:text-cyan-400'
                : 'text-gray-400 hover:text-cyan-600'
            }`}
          >
            {EMAIL}
          </a>
          {/* <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm transition-colors ${
              isDark
                ? 'text-white/40 hover:text-cyan-400'
                : 'text-gray-400 hover:text-cyan-600'
            }`}
          >
            <Linkedin size={16} />
            LinkedIn
          </a> */}
        </div>
      </div>
    </section>
  );
}
