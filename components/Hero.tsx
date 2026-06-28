import React from 'react';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Available for Leadership Roles
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Senior Product Leader & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">Digital Strategy Expert</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              With <strong>13.8+ years</strong> of experience driving 0-to-1 product launches and scaling enterprise SaaS, CRM, and Health Tech platforms. Proven track record of generating <strong>₹2 Cr.+ annual revenue</strong> and impacting millions of users globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-1"
              >
                Get in Touch <ArrowRight size={20} />
              </a>
              <a 
                href="/chinmayjain.pdf" 
                download
                className="px-8 py-4 bg-secondary hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700 hover:border-accent/50"
              >
                Download Resume <Download size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
               <div className="flex items-center gap-2">
                 <CheckCircle size={16} className="text-accent" />
                 <span>Agile & Scalable Solutions</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle size={16} className="text-accent" />
                 <span>AI/ML Innovation</span>
               </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
             <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-emerald-600 rounded-full opacity-60 group-hover:opacity-80 blur-xl transition duration-1000 group-hover:duration-200"></div>
                
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 ring-2 ring-slate-700/50 shadow-2xl">
                  <img 
                    src="/chinmay.jpg" 
                    alt="Chinmay Jain" 
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 -left-4 bg-secondary border border-slate-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce hidden md:flex">
                  <div className="bg-accent/20 p-2 rounded-full">
                    <CheckCircle className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Experience</p>
                    <p className="text-white font-bold">13+ Years</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};