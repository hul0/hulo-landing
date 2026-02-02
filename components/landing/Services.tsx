'use client';

import React from 'react';
import MagicBento, { BentoCardProps } from '@/components/MagicBento';
import { Globe, Smartphone, Cpu } from 'lucide-react';

const serviceCards: BentoCardProps[] = [
  {
    colSpan: 2,
    rowSpan: 2,
    title: 'Web Development',
    label: 'Architecture',
    description: 'Next.js architecture with high-performance optimization. We build the internet of tomorrow, today.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    icon: <Globe className="w-16 h-16 mb-6 text-white" />,
    color: '#060010'
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Mobile Apps',
    label: 'Native',
    description: 'Native iOS & Android experiences that feel intuitive and fluid.',
    icon: <Smartphone className="w-20 h-20 text-black" />,
    color: '#ffffff', // White card
    // Note: MagicBento text color is usually white, specific styling for this card might be needed or we accept it's dark text on white?
    // MagicBento uses text-white by default in rendering. 
    // We should probably stick to dark theme or override styles.
    // Let's keep it consistent with the theme (Dark) for now to avoid visibility issues, or set a dark color background.
    // The previous design had white background with black text.
    // MagicBento is built for dark mode (glows, particles). 
    // I will use a dark gray for contrast instead of white, to ensure text visibility with the component's structure.
  },
  {
    colSpan: 3,
    rowSpan: 1,
    title: 'Custom Solutions',
    label: 'Backend',
    description: 'Tailored data architecture and backend systems.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    icon: <Cpu className="w-12 h-12 mb-6" />,
    color: '#18181b' // zinc-900
  }
];

import { motion } from 'framer-motion';

// ... serviceCards array remains same, but maybe update colors ...

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0c] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
           <h2 className="font-cinzel text-5xl md:text-6xl mb-6 text-white">Our Craft</h2>
           <div className="h-1 w-20 bg-secondary"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagicBento 
            cards={serviceCards}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            spotlightRadius={300}
            glowColor="rgba(212, 246, 0, 0.4)" // Neon Yellow glow
          />
        </motion.div>
      </div>
    </section>
  );
}
