import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="credentials" className="py-24 relative bg-slate-950 bg-dot-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight font-display">
            Credentials & Achievements
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            An overview of formal education, specialized product management credentials, and global media recognitions.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
          
          {/* Card 1: Education Timeline (Large Box - Span 3) */}
          <div className="col-span-1 md:col-span-3 glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-white font-display tracking-tight">Academic Foundations</h3>
              </div>

              <div className="space-y-8 border-l border-slate-800 pl-5 ml-2.5">
                <div className="relative group">
                  <span className="absolute -left-[1.625rem] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">2012</span>
                  <h4 className="text-lg font-bold text-white mt-2 mb-0.5">M.B.A (E-Commerce)</h4>
                  <p className="text-slate-300 text-sm font-medium">Rajasthan University, Jaipur</p>
                  <p className="text-xs text-slate-500">Ramnath Anandilal Podar Institute of Management</p>
                  <div className="mt-2.5 inline-block px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-mono">
                    Grade: <span className="text-emerald-400 font-bold">73.8%</span>
                  </div>
                </div>

                <div className="relative group">
                  <span className="absolute -left-[1.625rem] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-emerald-500 transition-colors"></span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded">2010</span>
                  <h4 className="text-lg font-bold text-white mt-2 mb-0.5">B.Tech (Computer Science)</h4>
                  <p className="text-slate-300 text-sm font-medium">Jagannath Gupta Institute of Engineering & Technology</p>
                  <p className="text-xs text-slate-500">Jaipur</p>
                  <div className="mt-2.5 inline-block px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-mono">
                    Grade: <span className="text-emerald-400 font-bold">72.27%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500">
              <span>Rajasthan University / JGIET</span>
              <span className="text-emerald-400 font-medium">Verified Credentials</span>
            </div>
          </div>

          {/* Card 2: Key Certifications (Large Box - Span 3) */}
          <div className="col-span-1 md:col-span-3 glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold text-white font-display tracking-tight">Executive Certifications</h3>
              </div>

              <div className="space-y-3.5">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 flex items-start justify-between group hover:border-emerald-500/20 transition-all duration-200">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm">Duke’s AI Product Management</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Specialization via Coursera (Pursuing)</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">AI</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 flex items-start justify-between group hover:border-emerald-500/20 transition-all duration-200">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm">Certified AI Generalist</h4>
                    <p className="text-xs text-slate-500 mt-0.5">ai.economictimes.com (2025)</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">AI</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 flex items-start justify-between group hover:border-emerald-500/20 transition-all duration-200">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm">SAFe 6 Product Owner / Product Manager</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Scaled Agile Framework (2024)</p>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10">Agile</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 flex items-start justify-between group hover:border-emerald-500/20 transition-all duration-200">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm">Data-Driven Product Management</h4>
                    <p className="text-xs text-slate-500 mt-0.5">IIM Lucknow (Best Project Award, 2020–21)</p>
                  </div>
                  <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10">Award</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 flex items-start justify-between group hover:border-emerald-500/20 transition-all duration-200">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-sm">Diploma In Nutrition and Fitness</h4>
                    <p className="text-xs text-slate-500 mt-0.5">INFS Pune (INFS Certified Nutritionist, 2024)</p>
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/10">INFS</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-[10px] text-slate-500 text-center font-mono">
              SAFe • INFS • IIM Lucknow • Duke AI
            </div>
          </div>

          {/* Card 3: Global Media Awards Spotlight (Wide Box - Span 4) */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                  <Trophy size={20} />
                </div>
                <h3 className="text-xl font-bold text-white font-display tracking-tight">Global Media Awards Spotlight</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-emerald-500/10 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs mb-1">
                      <Trophy size={14} /> Global Excellence Award
                    </div>
                    <h4 className="font-bold text-white text-base">INMA Global Media Award</h4>
                    <p className="text-xs text-slate-400 mt-1">Best Use of Data Analytics (AUTOBOT Project, 2018)</p>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-3 block uppercase font-mono tracking-wider">INMA (International News Media)</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-emerald-500/10 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-600 font-semibold text-xs mb-1">
                      <Trophy size={14} /> Bronze Recipient
                    </div>
                    <h4 className="font-bold text-white text-base">WAN-IFRA South Asian Award</h4>
                    <p className="text-xs text-slate-400 mt-1">Best Reader Revenue Project (Bronze, 2018)</p>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-3 block uppercase font-mono tracking-wider">WAN-IFRA (World Press Association)</span>
                </div>
              </div>

              <div className="mt-5 p-3.5 bg-slate-950/60 rounded-xl border border-slate-900 text-xs text-slate-400 leading-relaxed">
                <span className="text-white font-semibold">Project Insight:</span> The AUTOBOT project automated smart notification targeting, drastically lowering reliance on third-party aggregators and driving millions in high-margin user page views.
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Categories: Data Analytics, Reader Revenue</span>
              <span className="text-emerald-400 font-bold">2018 Global Highlights</span>
            </div>
          </div>

          {/* Card 4: Executive Performance Spotlight (Span 2) */}
          <div className="col-span-1 md:col-span-2 glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md bg-emerald-950/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-4 uppercase tracking-wider">
                <Star size={14} className="fill-emerald-400" /> Executive Honor
              </div>
              <h3 className="text-2xl font-bold text-white font-display leading-tight tracking-tight mb-3">
                Times Spotlight Award
              </h3>
              <p className="text-sm text-emerald-100 leading-relaxed mb-4">
                Awarded for outstanding contribution to digital products in Times Network. Recognized among the <strong className="text-white underline">top 5%</strong> of performers across the group.
              </p>
            </div>

            <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-500/10 text-center">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">Issuer</span>
              <span className="text-xs font-bold text-white">Times Network (The Times Group)</span>
            </div>
          </div>

          {/* Card 5: Professional Tech Badges Showcase (Full Width - Span 6) */}
          <div className="col-span-1 md:col-span-6 glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 font-mono">
              Additional Industry Honors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-900">
                <span className="text-lg">📱</span>
                <div>
                  <h5 className="text-sm font-bold text-white">DIGIPUB Awards</h5>
                  <p className="text-xs text-slate-400">Best Push Notification Campaign Project (2018)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-900">
                <span className="text-lg">⚡</span>
                <div>
                  <h5 className="text-sm font-bold text-white">IAMAI Tech Awards</h5>
                  <p className="text-xs text-slate-400">Awarded Most Digitally Enabled Org (2018)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-900">
                <span className="text-lg">👗</span>
                <div>
                  <h5 className="text-sm font-bold text-white">Maddies Award</h5>
                  <p className="text-xs text-slate-400">Best Mobile Fashion Site for Fashion101.in (2015)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};