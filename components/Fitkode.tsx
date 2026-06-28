import React from 'react';
import { Activity, Dumbbell, Award } from 'lucide-react';

export const Fitkode: React.FC = () => {
  return (
    <section id="fitkode" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-10 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <Activity size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  Strategic Initiative
                </span>
                <h3 className="text-2xl font-bold text-white font-display tracking-tight mt-1.5">
                  Fitkode: Fitness & Nutrition Project
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <span>Domain Discovery</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            In addition to leading enterprise product scales, Chinmay founded <strong>Fitkode</strong> as a personal research initiative in wellness technology. The project explores lightweight, user-centered product frameworks to simplify diet tracking and wellness methodologies, combining strategic product discovery with specialized health domain expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/10 mt-0.5">
                <Dumbbell size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Product Frameworks</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Designed streamlined client experiences to study user engagement and behavioral persistence in high-fidelity diet plans.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/10 mt-0.5">
                <Award size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Science-Backed Insights</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Synthesized direct user behavior studies alongside formal credentialing from the Diploma in Nutrition and Fitness (INFS Pune, 2024).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
