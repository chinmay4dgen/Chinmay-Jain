import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

export const Awards: React.FC = () => {
  const awards = [
    {
      title: "INMA Global Media Award",
      org: "International News Media Association",
      desc: "Best Use of Data Analytics (AUTOBOT, 2018)",
      icon: <Trophy className="text-yellow-500 w-8 h-8" />
    },
    {
      title: "WAN-IFRA South Asian Award",
      org: "World Association of News Publishers",
      desc: "Reader Revenue (Bronze, 2018)",
      icon: <Award className="text-amber-600 w-8 h-8" />
    },
    {
      title: "Times Spotlight Award",
      org: "Times Network",
      desc: "Recognized among top 5% performers (2018).",
      icon: <Star className="text-accent w-8 h-8" />
    },
    {
      title: "IAMAI Tech Awards",
      org: "IAMAI",
      desc: "Most Digitally Enabled Org. (2018)",
      icon: <Award className="text-blue-400 w-8 h-8" />
    },
    {
      title: "DIGIPUB Awards",
      org: "DIGIPUB",
      desc: "Best Push Notification Project (2018)",
      icon: <Trophy className="text-purple-400 w-8 h-8" />
    },
    {
      title: "Maddies Award",
      org: "Exchange4Media",
      desc: "Best Mobile Site for Fashion101.in (2015)",
      icon: <Award className="text-pink-400 w-8 h-8" />
    }
  ];

  return (
    <section id="awards" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Honors & Recognitions</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">Celebrating excellence in product innovation, data analytics, and digital transformation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-primary p-8 rounded-xl border border-slate-800 text-center hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                {award.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
              <p className="text-accent text-xs font-bold uppercase tracking-wider mb-4">{award.org}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};