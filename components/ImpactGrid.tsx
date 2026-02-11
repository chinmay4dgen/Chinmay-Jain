import React from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

export const ImpactGrid: React.FC = () => {
  const metrics = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      label: "User Impact",
      value: "1M+",
      description: "Users impacted globally across platforms."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      label: "Revenue Generated",
      value: "₹2 Cr+",
      description: "Annual revenue through product initiatives."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
      label: "Leadership",
      value: "13.8+",
      description: "Years of experience driving digital products."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      label: "Global Reach",
      value: "MENA/USA",
      description: "Experience across USA, APAC, Africa & MENA."
    }
  ];

  return (
    <section className="py-20 bg-secondary border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-primary p-8 rounded-2xl border border-slate-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="mb-4 bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">{metric.label}</p>
              <p className="text-sm text-slate-500">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};