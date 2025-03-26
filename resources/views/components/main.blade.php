// resources/js/Pages/Welcome.jsx
import React from 'react';
import Navbar from '@/Components/Navbar';
import HeroSection from '@/Components/HeroSection';
import AboutSection from '@/Components/AboutSection';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}
