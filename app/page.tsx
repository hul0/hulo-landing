'use client';

import React from 'react';
import SplashCursor from '@/components/SplashCursor';

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Process } from '@/components/landing/Process';
import { Portfolio } from '@/components/landing/Portfolio';
import { Testimonials } from '@/components/landing/Testimonials';
import { Clients } from '@/components/landing/Clients';
import { FAQ } from '@/components/landing/FAQ';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SplashCursor />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Clients />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}