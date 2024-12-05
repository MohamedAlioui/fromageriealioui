import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { About } from '../components/About';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main>
      
      <HeroCarousel />
      <FeaturedProducts />
      <Process />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}