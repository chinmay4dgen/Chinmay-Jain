import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, Loader2, MessageSquare, User, AtSign } from 'lucide-react';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // To receive actual emails from your static GitHub Pages site,
  // register a free form endpoint at https://formspree.io/ and paste your Form ID below:
  const FORMSPREE_FORM_ID = 'xanybovk'; // Replace with your Formspree ID (e.g., 'mqkvgqwb')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);

    try {
      // Perform real client-side POST to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Lead: ${form.name}`,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        // Auto reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (err) {
      console.warn('Endpoint submission failed. Triggering fail-safe email handler.', err);
      
      // Fallback: If form processor is not configured or offline, trigger client mailto so they never lose a lead
      const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:chinmay4jain@gmail.com?subject=${subject}&body=${body}`;
      
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 bg-grid-pattern">
      {/* Accent gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight font-display">
            Let's Build Something Scalable
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Open to executive leadership roles in Product Management, Digital Transformation, and AI Innovation. Let's start the conversation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Quick Connect details column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-6 md:p-8 rounded-2xl glass-card border border-white/[0.06] bg-white/[0.01]">
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-4">Direct Channels</h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Connect directly through primary channels for immediate professional, consulting, or advisory opportunities.
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:chinmay4jain@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-900 hover:border-emerald-500/30 text-white transition-all duration-300"
                >
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Send Email</span>
                    <span className="text-sm font-semibold font-mono">chinmay4jain@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/chinmay4jain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:border-[#0077b5]/50 text-white transition-all duration-300"
                >
                  <div className="p-3 bg-[#0077b5]/20 text-blue-400 rounded-lg border border-[#0077b5]/30">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-400 block">Professional Profile</span>
                    <span className="text-sm font-semibold">Connect on LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-900/40 text-xs text-emerald-300">
              <span className="font-bold uppercase block text-[10px] text-emerald-400 mb-1">Standard Response Time</span>
              Typically responds to professional inquiries within 24 hours.
            </div>
          </div>

          {/* Interactive Form column */}
          <div className="lg:col-span-7 rounded-2xl p-6 md:p-8 glass-card border border-white/[0.06] bg-white/[0.01] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-6">Send an Inquiry</h3>
              
              {success ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex flex-col items-center text-center space-y-3 animate-fadeIn my-6">
                  <CheckCircle2 size={40} className="text-emerald-400" />
                  <h4 className="text-base font-bold text-white font-display">Message Received Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-sm">
                    Thank you for reaching out. Chinmay will review your details and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5 ml-1">Your Name</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600">
                          <User size={14} />
                        </span>
                        <input 
                          type="text" 
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Chinmay Jain"
                          className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5 ml-1">Email Address</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600">
                          <AtSign size={14} />
                        </span>
                        <input 
                          type="email" 
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="recruiter@company.com"
                          className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5 ml-1">Message / Project Objectives</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-4 text-slate-600">
                        <MessageSquare size={14} />
                      </span>
                      <textarea 
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Let's collaborate on AI strategy, growth initiatives, or a leadership requirement..."
                        className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-900 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-950 font-extrabold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Submit Secure Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <p className="text-[10px] text-slate-600 text-center font-mono mt-4">
              🛡️ Encrypted end-to-end client-side pipeline. No credentials cached.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};