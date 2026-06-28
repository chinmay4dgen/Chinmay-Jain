import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Fitkode', href: '#fitkode' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      {/* Proof of Life Top Bar */}
      <div className="bg-slate-950/80 border-b border-slate-800/40 py-2 text-xs text-slate-400">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>📍 Delhi NCR, India</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Strategic Opportunities / Advisory
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Local Time (IST)</span>
            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20 shadow-inner">
              {time || '00:00:00 AM'}
            </span>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <a href="#" className="text-xl font-bold text-white tracking-tight font-display">
          CHINMAY<span className="text-accent">.</span>JAIN
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg shadow-md hover:shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Let's Collaborate
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-slate-800 p-6 shadow-2xl backdrop-blur-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-accent font-medium block py-2 border-b border-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full text-center px-4 py-3 text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Collaborate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};