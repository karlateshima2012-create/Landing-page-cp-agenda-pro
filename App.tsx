
import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { QuickFeatures } from './components/sections/QuickFeatures';

import { Pricing } from './components/sections/Pricing';
import { FAQSection } from './components/sections/FAQ';

import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { FloatingCTA } from './components/sections/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-pink/30 selection:text-white bg-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="relative z-20">
        <QuickFeatures />
      </div>



      <Pricing />



      {/* Unified Bottom Area: FAQ + Final CTA */}
      <div className="relative bg-[#020408] overflow-hidden">
        {/* Atmospheric Gradients removed as requested */}

        <FAQSection />
        <FinalCTA />
      </div>



      <Footer />
      <FloatingCTA />

      {/* Ambient Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-30 bg-grid"></div>
    </div>
  );
}
