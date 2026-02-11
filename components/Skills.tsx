import React from 'react';
import { Layout, Cpu, Wrench, BarChart } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Strategy & Leadership",
      icon: <Layout className="text-accent" />,
      skills: ["Product Lifecycle Management (PLM)", "P&L Ownership", "B2B SaaS Strategy", "GTM Strategy", "Stakeholder Management", "Growth Campaigns", "Marketing Automation"]
    },
    {
      title: "Execution & Analytics",
      icon: <BarChart className="text-blue-400" />,
      skills: ["Agile/Scrum Transformation", "User Behavior Analysis", "A/B Testing", "SWOT Analysis", "UAT", "Data Reporting", "Google Analytics 4 (GA4)"]
    },
    {
      title: "Technical & AI",
      icon: <Cpu className="text-purple-400" />,
      skills: ["AI/ML Product Strategy", "API Integrations", "SQL", "Technical Architecture", "Google AI Studio", "Generative AI", "LLM Integration"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-emerald-400" />,
      skills: ["Jira & Confluence", "Figma", "GitHub", "n8n", "Zapier", "Miro", "Balsamiq", "Zoho Suite", "WordPress", "Magento"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-secondary p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-sm border border-slate-800 hover:border-accent/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};