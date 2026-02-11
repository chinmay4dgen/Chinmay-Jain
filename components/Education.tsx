import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-slate-800 rounded-lg">
                <GraduationCap className="text-accent w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-10 border-l-2 border-slate-800 ml-3 pl-8">
              <div className="relative group">
                <span className="absolute -left-[2.5rem] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-accent transition-colors"></span>
                <h3 className="text-xl font-bold text-white mb-1">M.B.A (E-Commerce)</h3>
                <p className="text-accent font-medium text-sm mb-1">Rajasthan University, Jaipur</p>
                <p className="text-slate-400 text-sm">Ramnath Anandilal Podar Institute of Management (2012)</p>
                <div className="mt-2 inline-block px-2 py-0.5 bg-slate-800 rounded text-xs text-slate-300">Grade: 73.8%</div>
              </div>

              <div className="relative group">
                <span className="absolute -left-[2.5rem] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-accent transition-colors"></span>
                <h3 className="text-xl font-bold text-white mb-1">B.Tech (Computer Science)</h3>
                <p className="text-accent font-medium text-sm mb-1">Jagannath Gupta Institute of Engineering & Technology</p>
                <p className="text-slate-400 text-sm">Jaipur (2010)</p>
                <div className="mt-2 inline-block px-2 py-0.5 bg-slate-800 rounded text-xs text-slate-300">Grade: 72.27%</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
             <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-slate-800 rounded-lg">
                <Award className="text-accent w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid gap-4">
              <div className="bg-secondary p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex items-start justify-between group">
                <div>
                  <h4 className="font-bold text-white group-hover:text-accent transition-colors">Duke’s AI Product Management</h4>
                  <p className="text-sm text-slate-400 mt-1">Specialization via Coursera (Pursuing)</p>
                </div>
                <BookOpen size={20} className="text-slate-600 group-hover:text-accent" />
              </div>

              <div className="bg-secondary p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex items-start justify-between group">
                <div>
                  <h4 className="font-bold text-white group-hover:text-accent transition-colors">Certified AI Generalist</h4>
                  <p className="text-sm text-slate-400 mt-1">ai.economictimes.com (2025)</p>
                </div>
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">AI</span>
              </div>
              
              <div className="bg-secondary p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex items-start justify-between group">
                <div>
                  <h4 className="font-bold text-white group-hover:text-accent transition-colors">SAFe 6 PO/PM</h4>
                  <p className="text-sm text-slate-400 mt-1">Scaled Agile Framework (2024)</p>
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Agile</span>
              </div>

              <div className="bg-secondary p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex items-start justify-between group">
                <div>
                  <h4 className="font-bold text-white group-hover:text-accent transition-colors">Data-Driven Product Management</h4>
                  <p className="text-sm text-slate-400 mt-1">IIM Lucknow (Best Project Award, 2020–21)</p>
                </div>
                <span className="text-xs font-bold text-purple-400 bg-purple-400/10 px-2 py-1 rounded">IIM</span>
              </div>

               <div className="bg-secondary p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex items-start justify-between group">
                <div>
                  <h4 className="font-bold text-white group-hover:text-accent transition-colors">Diploma In Nutrition and Fitness</h4>
                  <p className="text-sm text-slate-400 mt-1">INFS Pune (2024)</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Fitkode</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};