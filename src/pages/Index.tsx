
import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { PopularDestinations } from '@/components/home/PopularDestinations';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <main>
        <HeroSection />
        <PopularDestinations />
        <FeaturedPackages />
        <WhyChooseUs />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
