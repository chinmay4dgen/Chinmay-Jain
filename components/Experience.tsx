import React, { useState } from 'react';
import { Briefcase, Calendar, Link as LinkIcon, MapPin, ChevronDown, ChevronUp, Check, Activity, Sparkles } from 'lucide-react';

interface CaseStudy {
  challenge: string;
  strategy: string;
  outcome: string;
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  link?: string;
  linkText?: string;
  metrics: string[];
  caseStudy: CaseStudy;
}

export const Experience: React.FC = () => {
  const [viewMode, setViewMode] = useState<'timeline' | 'compact'>('compact');
  const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({
    0: true // Keep the first one open by default for high-impact engagement
  });

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const jobs: Job[] = [
    {
      company: "American Epay Pvt. Ltd. (Vensure Group)",
      role: "Sr. Product Manager",
      period: "Oct 2025 – Present",
      location: "NOIDA",
      description: "Building B2B SaaS for USA Entertainment Industry distributed workforce Onboarding, Timekeeping and Payroll Management for TV Studios and Film Production Houses.",
      highlights: [
        "Leading product strategy for HCM solutions impacting major entertainment studios.",
        "Optimizing payroll workflows reducing processing time by 40%.",
        "Managing distributed workforce onboarding systems."
      ],
      metrics: ["40% payroll reduction", "US Entertainment B2B SaaS", "HCM Leadership"],
      caseStudy: {
        challenge: "US entertainment payroll & HCM workflows for distributed production crews had massive administrative overhead, localized tax challenges, and friction in onboarding.",
        strategy: "Drove product strategy to unify digital onboarding, automated multi-state timekeeping, and film-production payroll compliance into a single integrated SaaS suite.",
        outcome: "Slashed manual processing duration by 40% and improved workforce onboarding accuracy and compliance to 100%."
      }
    },
    {
      company: "Beehive Systems Pvt. Ltd. (WASP3D)",
      role: "Product Manager",
      period: "March 2020 – Oct 2025",
      location: "NOIDA",
      description: "Owned product launch strategy and lifecycle for new SaaS tools including WASP3D XPRESS, PRO, Virtual, Presenter.",
      link: "https://store.wasp3d.com",
      linkText: "store.wasp3d.com",
      highlights: [
        "Launched store.wasp3d.com – Magento based eCommerce store from 0 to 1.",
        "Collaborated with intercompany cross-functional teams and 3rd party vendors.",
        "Increased monthly site traffic from 100 to 13,000+ and leads from 0 to 100/month using data-led experiments."
      ],
      metrics: ["100 to 13,000+ Traffic Boost", "100+ Leads/mo", "eCommerce 0 to 1"],
      caseStudy: {
        challenge: "Broadcast graphics products were traditionally sold through slow, analog sales networks with no self-serve mechanism, limiting global inbound leads.",
        strategy: "Built and engineered the full launch of store.wasp3d.com with localized pricing tiers, and rolled out structured search optimization schemas.",
        outcome: "Scaled digital reach with traffic rising to over 13,000 visitors/month and created a sustainable monthly inbound lead channel from scratch."
      }
    },
    {
      company: "Times Network (The Times Group)",
      role: "Product Manager – Digital Platform",
      period: "July 2018 – March 2020",
      location: "NOIDA",
      description: "Recognized among the top 5% performers in Times Network. Awarded with Times Spotlight Award.",
      highlights: [
        "Established push notifications, contributing 17% of overall page views and generating estimated revenue of ₹1.52 Cr.",
        "Launched Google schema-guided designs, improving session duration by 2X and pages/session."
      ],
      metrics: ["₹1.52 Cr. Extra Revenue", "17% page view contribution", "2X session duration"],
      caseStudy: {
        challenge: "Low native-channel retention left digital news platforms heavily dependent on volatile social media algorithm changes for daily traffic spikes.",
        strategy: "Designed and engineered an automated real-time web push notification engine and implemented rich micro-schemas targeting Google News highlights.",
        outcome: "Drove 17% of total network page views, translating directly to ₹1.52 Crore in recurring ad revenue, and doubled native session duration."
      }
    },
    {
      company: "DB Digital (Dainik Bhaskar Group)",
      role: "Asst. Product Manager – Digital",
      period: "May 2015 – July 2018",
      location: "NOIDA",
      description: "Built 0 to 1 in-house Push Notifications (Web/WAP/APP), contributing ~25% sessions and generating ₹2 Cr/year.",
      highlights: [
        "Led a 15-member cross-functional team as Acting Head of Desktop Sites in 2017.",
        "Launched Web Bhaskar Homepage with ML & Big Data, boosting Avg. Time on Page by 34.91% and sessions by 8.79%."
      ],
      metrics: ["₹2 Cr. Annual Revenue", "25% session contribution", "34.91% time on page boost"],
      caseStudy: {
        challenge: "Third-party notification vendors were incredibly expensive and crashed frequently under breaking news spikes of over millions of concurrent sessions.",
        strategy: "Architected a custom, highly scalable in-house push notification pipeline and launched a personalized home feed powered by real-time ML recommendation models.",
        outcome: "Boosted session frequency contributing to 25% of total digital visits, generated ₹2 Crore/year in ad yield, and improved average user time on site by 34.91%."
      }
    },
    {
      company: "Aardee Solutions Pvt. Ltd.",
      role: "Product Manager – Government Platforms",
      period: "June 2012 – May 2015",
      location: "Delhi",
      description: "Led development of critical government portals and defense applications.",
      highlights: [
        "Launched a defense department web application system reducing task time from 20 mins to 2 mins (90% gain).",
        "Led the development of nhp.gov.in (National Health Portal) for Ministry of Health."
      ],
      metrics: ["90% workflow time gain", "nhp.gov.in launch", "Defense Web App 0 to 1"],
      caseStudy: {
        challenge: "Critical government health information portals suffered from poor usability, slow performance, and inaccessible layouts for mobile readers.",
        strategy: "Spearheaded the UX modernization of defense and ministry portals, standardizing clean structural layouts and lightweight responsive modules.",
        outcome: "Successfully launched the National Health Portal and optimized defense task times from 20 minutes down to just 2 minutes."
      }
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950 bg-grid-pattern">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight font-display">
            Professional Journey
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Over 14 years of leadership in digital product management, scaling platforms, and accelerating product growth.
          </p>

          {/* Compact / Timeline View Slider Tab */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setViewMode('compact')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'compact' 
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/15' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles size={14} /> Compact Executive View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'timeline' 
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/15' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity size={14} /> Full Timeline View
            </button>
          </div>
        </div>

        {viewMode === 'timeline' ? (
          /* Timeline Layout */
          <div className="relative max-w-5xl mx-auto">
            {/* Center Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 md:translate-x-0"></div>

            {jobs.map((job, index) => {
              const isOpen = !!expandedJobs[index];
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-stretch mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline bullet */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-slate-900 border-4 border-emerald-500 z-10 -translate-x-[0.65rem] md:-translate-x-[0.6rem] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

                  {/* Glassmorphic Card */}
                  <div className="w-full md:w-[46%] ml-12 md:ml-0 md:px-0 flex flex-col justify-center">
                    <div className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300">
                      
                      {/* Company & Role */}
                      <div className="flex flex-col gap-1 mb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                            {job.company.split(' ')[0]}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                            <Calendar size={11} /> {job.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mt-1.5 font-display tracking-tight">{job.role}</h3>
                        <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                          <Briefcase size={12} className="text-slate-500" /> {job.company}
                          <span className="text-slate-600">•</span>
                          <MapPin size={11} className="text-slate-500" /> {job.location}
                        </p>
                      </div>

                      {/* Micro Metric Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {job.metrics.map((metric, mi) => (
                          <span key={mi} className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full shadow-sm">
                            🏆 {metric}
                          </span>
                        ))}
                      </div>

                      {/* Main Paragraph */}
                      <p className="text-slate-300 mb-5 text-sm leading-relaxed">{job.description}</p>

                      {/* Bullet Highlights */}
                      {job.highlights && (
                        <ul className="text-slate-400 text-xs space-y-2 mb-6 border-l border-slate-800 pl-4">
                          {job.highlights.map((highlight, hi) => (
                            <li key={hi} className="relative">
                              <span className="text-emerald-400 mr-1.5">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Interactive Case Study Toggle Button */}
                      <button
                        onClick={() => toggleJob(index)}
                        className="w-full flex items-center justify-between text-xs font-bold tracking-wider text-slate-400 hover:text-white uppercase py-2.5 px-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-xl transition-all duration-200"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles size={12} className="text-emerald-400" /> 
                          {isOpen ? "Collapse Strategy & Insights" : "View Strategy & Case Study"}
                        </span>
                        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {/* Case Study Expanded Area */}
                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-3 animate-fadeIn">
                          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/40">
                            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">The Challenge</span>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{job.caseStudy.challenge}</p>
                          </div>
                          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/40">
                            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">The Product Strategy</span>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{job.caseStudy.strategy}</p>
                          </div>
                          <div className="p-3 bg-emerald-950/20 rounded-xl border border-emerald-900/40">
                            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">The Metrics Achieved</span>
                            <p className="text-xs text-emerald-300 mt-1 leading-relaxed">{job.caseStudy.outcome}</p>
                          </div>
                        </div>
                      )}

                      {/* External Link */}
                      {job.link && (
                        <a 
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-emerald-400 text-xs hover:underline font-bold mt-4"
                        >
                          <LinkIcon size={12} /> {job.linkText || "View Project Live"}
                        </a>
                      )}

                    </div>
                  </div>

                  {/* Center timeline spacer */}
                  <div className="hidden md:block w-[8%]"></div>
                  <div className="hidden md:block w-[46%]"></div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Compact Executive Summary Grid */
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">{job.period}</span>
                      <h3 className="text-lg font-bold text-white font-display mt-0.5">{job.role}</h3>
                      <p className="text-xs text-emerald-400 font-semibold">{job.company}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {job.metrics.map((metric, mi) => (
                      <span key={mi} className="text-[10px] font-bold text-slate-200 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2 pt-3 border-t border-slate-900 flex justify-between items-center text-xs">
                  <span className="text-slate-500">{job.location}</span>
                  <button 
                    onClick={() => {
                      setViewMode('timeline');
                      setExpandedJobs(prev => ({ ...prev, [index]: true }));
                      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    Details & Strategy →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};