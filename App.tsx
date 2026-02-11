import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactGrid } from './components/ImpactGrid';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Fitkode } from './components/Fitkode';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-slate-300">
      <Header />
      <main>
        <Hero />
        <ImpactGrid />
        <Experience />
        <Skills />
        <Fitkode />
        <Education />
        <Awards />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-slate-600 text-sm bg-primary border-t border-slate-800">
        <p>© {new Date().getFullYear()} Chinmay Jain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;