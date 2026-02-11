import React from 'react';
import { Activity, Heart, Zap } from 'lucide-react';

export const Fitkode: React.FC = () => {
  return (
    <section id="fitkode" className="py-24 relative overflow-hidden">
      {/* Dynamic background for distinction */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-primary to-primary z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 text-sm font-medium mb-6">
              <Activity size={16} /> Entrepreneurial Venture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fitkode: Fitness Simplified
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Founder of a fitness-tech consultancy aiming to revolutionize personal health through AI-driven coaching. Merging deep product expertise with passion for wellness.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-emerald-900/20 rounded-lg text-emerald-500">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">AI-Driven Coaching</h4>
                  <p className="text-slate-400">Leveraging Large Language Models to provide personalized, real-time health and nutrition guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-emerald-900/20 rounded-lg text-emerald-500">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Holistic Approach</h4>
                  <p className="text-slate-400">Combining certifications in Nutrition and Fitness (INFS) with scalable tech solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-white tracking-tight">FITKODE<span className="text-emerald-500">.</span>AI</h3>
                    <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded uppercase tracking-wider">Beta Phase</div>
                </div>

                <div className="space-y-4">
                    <div className="h-24 bg-slate-800 rounded-lg animate-pulse w-full"></div>
                    <div className="flex gap-4">
                        <div className="h-24 bg-slate-800 rounded-lg animate-pulse w-2/3"></div>
                        <div className="h-24 bg-slate-800 rounded-lg animate-pulse w-1/3"></div>
                    </div>
                    <div className="h-12 bg-slate-800 rounded-lg animate-pulse w-full mt-6"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 to-transparent flex justify-center pt-20">
                    <p className="text-emerald-400 font-mono text-sm">System Status: Optimizing AI Models...</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};