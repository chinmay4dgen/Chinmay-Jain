import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something Scalable</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Open to leadership roles in Product Management, Digital Strategy, and AI initiatives. 
          Let's discuss how we can drive your product from 0 to 1 and beyond.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:chinmay4jain@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 transition-all hover:scale-105"
          >
            <Mail className="text-accent" />
            <span className="font-medium">chinmay4jain@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/chinmay4jain/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] hover:bg-[#006399] text-white rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
          >
            <Linkedin className="text-white" />
            <span className="font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};