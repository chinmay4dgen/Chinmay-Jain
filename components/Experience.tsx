import React from 'react';
import { Briefcase, Calendar, Link as LinkIcon, MapPin } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  link?: string;
  linkText?: string;
}

export const Experience: React.FC = () => {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Professional Journey</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Over a decade of leadership in Product Management, executing high-impact strategies for global enterprises.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2 md:translate-x-0"></div>

          {jobs.map((job, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-accent border-4 border-secondary z-10 -translate-x-[0.65rem] md:-translate-x-[0.6rem] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 ml-12 md:ml-0 md:px-6">
                <div className={`bg-primary p-6 rounded-2xl border border-slate-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${
                   index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <div className={`flex flex-col gap-1 mb-3 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <div className="text-accent font-medium flex items-center gap-2">
                      <Briefcase size={14} /> {job.company}
                    </div>
                    <div className="flex items-center gap-4 text-slate-500 text-xs uppercase tracking-wide font-semibold">
                       <span className="flex items-center gap-1"><Calendar size={12} /> {job.period}</span>
                       <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{job.description}</p>
                  
                  {job.highlights && (
                    <ul className={`text-slate-400 text-sm space-y-2 mb-3 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex flex-col">
                            <span className="text-white">•</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.link && (
                    <a 
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-accent text-sm hover:underline font-medium mt-2 ${
                        index % 2 === 0 ? '' : 'md:flex-row-reverse'
                      }`}
                    >
                      <LinkIcon size={12} /> {job.linkText || "View Project"}
                    </a>
                  )}
                </div>
              </div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};