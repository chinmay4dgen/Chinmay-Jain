import React from 'react';
import { ArrowRight, Download, CheckCircle, Award, Shield, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-primary bg-dot-pattern">
      {/* Background decoration with radial & linear gradient blurs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-12 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wider mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Leadership Roles
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-bold text-white mb-6 leading-tight tracking-tight font-display">
              Senior Product Leader & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Digital Strategy Expert
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              With <strong>14+ years</strong> of experience driving 0-to-1 product launches and scaling enterprise SaaS, CRM, and Health Tech platforms. Proven track record of generating <strong>₹2 Cr.+ annual revenue</strong> and impacting millions of users globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Get in Touch <ArrowRight size={20} className="stroke-[3px]" />
              </a>
              <a 
                href="/chinmayjain.pdf" 
                download
                className="px-8 py-4 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-slate-800 hover:border-emerald-500/30 hover:-translate-y-1 hover:scale-[1.02] backdrop-blur-sm"
              >
                Download Resume <Download size={20} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
               <div className="flex items-center gap-2 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/60">
                 <CheckCircle size={16} className="text-emerald-400" />
                 <span>Agile & Scalable Solutions</span>
               </div>
               <div className="flex items-center gap-2 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/60">
                 <CheckCircle size={16} className="text-emerald-400" />
                 <span>AI/ML Innovation</span>
               </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
             <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-40 group-hover:opacity-75 blur-2xl transition duration-1000 group-hover:duration-300"></div>
                
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-950 ring-4 ring-slate-800/40 shadow-2xl">
                  <img 
                    src="/chinmay.jpg" 
                    alt="Chinmay Jain" 
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 -left-4 bg-slate-950/90 border border-slate-800 p-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce hidden md:flex backdrop-blur-md">
                  <div className="bg-emerald-500/15 p-2 rounded-full border border-emerald-500/20">
                    <CheckCircle className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Experience</p>
                    <p className="text-white font-bold text-sm">14+ Years</p>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Brand/Affiliation Bar */}
        <div className="border-t border-slate-800/50 bg-slate-950/40 backdrop-blur-sm p-6 rounded-2xl mt-20 border border-slate-800/30">
          <p className="text-center text-[11px] font-bold tracking-widest text-emerald-400/80 uppercase mb-5">
            Key Career Checkpoints & Corporate Affiliations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              { name: "Vensure Group", detail: "US B2B SaaS", icon: <Shield size={18} className="text-emerald-400" /> },
              { name: "Times Network", detail: "Digital Media", icon: <Award size={18} className="text-emerald-400" /> },
              { name: "DB Digital", detail: "Dainik Bhaskar Group", icon: <Compass size={18} className="text-emerald-400" /> },
              { name: "WASP3D", detail: "Broadcast Tech", icon: <CheckCircle size={18} className="text-emerald-400" /> }
            ].map((brand) => (
              <div 
                key={brand.name} 
                className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="p-1.5 bg-slate-900/60 rounded-lg border border-slate-800/50">
                  {brand.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 font-display leading-tight">{brand.name}</h4>
                  <p className="text-[10px] text-slate-500 font-mono">{brand.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};