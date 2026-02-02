'use client';

import React from 'react';
import LogoLoop from '@/components/LogoLoop';

const clientLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", alt: "React" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind" },
  { src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", alt: "Next.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", alt: "TypeScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", alt: "GitHub" },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 border-y border-white/5 bg-[#0a0a0c]">
       <div className="container mx-auto px-6 mb-12 flex justify-center">
         <span className="font-playfair italic text-2xl text-zinc-600">Trusted by visionaries</span>
       </div>
       
       <div className="max-w-[100vw] overflow-hidden py-10 opacity-70 hover:opacity-100 transition-opacity">
          <LogoLoop 
            logos={clientLogos} 
            speed={100} 
            direction="left" 
            pauseOnHover={true} 
            gap={150}
            logoHeight={40}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
         />
       </div>
    </section>
  );
}
